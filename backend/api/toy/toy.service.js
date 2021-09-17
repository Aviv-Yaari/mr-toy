const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};

async function query(filterBy, sortBy) {
  try {
    const criteria = _buildCriteria(filterBy);
    const sort = sortBy ? JSON.parse(sortBy) : sortBy;
    const collection = await dbService.getCollection('toy');
    const toys = await collection.find(criteria).sort(sort).toArray();
    return toys;
  } catch (err) {
    logger.error('cannot find toys', err);
    throw err;
  }
}

async function getById(toyId) {
  try {
    const collection = await dbService.getCollection('toy');
    const toys = await collection
      .aggregate([
        { $match: { _id: ObjectId(toyId) } },
        {
          $lookup: {
            from: 'review',
            as: 'reviews',
            let: { toyId: '$_id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$toy', '$$toyId'] } } },
              {
                $lookup: {
                  from: 'user',
                  as: 'user',
                  let: { userId: '$createdBy' },
                  pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$userId'] } } }],
                },
              },
              { $unwind: '$user' },
              { $project: { 'user.password': 0 } },
            ],
          },
        },
        { $project: { 'reviews.createdBy': 0, 'reviews.toy': 0 } },
      ])
      .toArray();
    // const toy = collection.findOne({ _id: ObjectId(toyId) });
    return toys[0];
  } catch (err) {
    logger.error(`cannot find toy ${toyId}`, err);
    throw err;
  }
}

async function remove(toyId) {
  try {
    const collection = await dbService.getCollection('toy');
    await collection.deleteOne({ _id: ObjectId(toyId) });
    return toyId;
  } catch (err) {
    logger.error(`cannot remove toy ${toyId}`, err);
    throw err;
  }
}

async function add(toy) {
  try {
    const collection = await dbService.getCollection('toy');
    const addedToy = await collection.insertOne(toy);
    return addedToy;
  } catch (err) {
    logger.error('cannot insert toy', err);
    throw err;
  }
}
async function update(toy) {
  try {
    const id = ObjectId(toy._id);
    delete toy._id;
    const collection = await dbService.getCollection('toy');
    await collection.updateOne({ _id: id }, { $set: { ...toy } });
    return toy;
  } catch (err) {
    logger.error(`cannot update toy ${toyId}`, err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = JSON.parse(filterBy);
  if (criteria.labels) criteria.labels = { $all: criteria.labels };
  if (criteria.name) {
    criteria.name = { $regex: criteria.name, $options: 'i' };
  }
  return criteria;
}
