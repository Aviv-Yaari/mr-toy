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
    const collection = await dbService.getCollection('review');
    const reviews = await collection.find(criteria).sort(sort).toArray();
    return reviews;
  } catch (err) {
    logger.error('cannot find reviews', err);
    throw err;
  }
}

async function getById(reviewId) {
  try {
    const collection = await dbService.getCollection('review');
    const review = collection.findOne({ _id: ObjectId(reviewId) });
    return review;
  } catch (err) {
    logger.error(`cannot find review ${reviewId}`, err);
    throw err;
  }
}

async function remove(reviewId) {
  try {
    const collection = await dbService.getCollection('review');
    await collection.deleteOne({ _id: ObjectId(reviewId) });
    return reviewId;
  } catch (err) {
    logger.error(`cannot remove review ${reviewId}`, err);
    throw err;
  }
}

async function add(review) {
  try {
    review.createdAt = Date.now();
    const collection = await dbService.getCollection('review');
    const addedReview = await collection.insertOne(review);
    return addedReview;
  } catch (err) {
    logger.error('cannot insert review', err);
    throw err;
  }
}
async function update(review) {
  try {
    const id = ObjectId(review._id);
    delete review._id;
    const collection = await dbService.getCollection('review');
    await collection.updateOne({ _id: id }, { $set: { ...review } });
    return review;
  } catch (err) {
    logger.error(`cannot update review ${reviewId}`, err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = JSON.parse(filterBy);
  if (criteria.toy) criteria.toy = ObjectId(criteria.toy);
  return criteria;
}
