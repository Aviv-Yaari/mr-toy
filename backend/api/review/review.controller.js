const reviewService = require('./review.service.js');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  getReviews,
  getReviewById,
  addReview,
  updateReview,
  removeReview,
};

// GET LIST
async function getReviews(req, res) {
  try {
    const { criteria, sort } = req.query;
    const reviews = await reviewService.query(criteria, sort);
    res.json(reviews);
  } catch (err) {
    logger.error('Failed to get reviews', err);
    res.status(500).send({ err: 'Failed to get reviews' });
  }
}

// GET BY ID
async function getReviewById(req, res) {
  try {
    const reviewId = req.params.id;
    const review = await reviewService.getById(reviewId);
    res.json(review);
  } catch (err) {
    logger.error('Failed to get review', err);
    res.status(500).send({ err: 'Failed to get review' });
  }
}

// POST (add review)
async function addReview(req, res) {
  try {
    const review = req.body;
    review.createdBy = ObjectId(req.session.user._id);
    review.toy = ObjectId(review.toy);
    const addedReview = await reviewService.add(review);
    res.json(addedReview);
  } catch (err) {
    logger.error('Failed to add review', err);
    res.status(500).send({ err: 'Failed to add review' });
  }
}

// PUT (Update review)
async function updateReview(req, res) {
  try {
    const review = req.body;
    const updatedReview = await reviewService.update(review);
    res.json(updatedReview);
  } catch (err) {
    logger.error('Failed to update review', err);
    res.status(500).send({ err: 'Failed to update review' });
  }
}

// DELETE (Remove review)
async function removeReview(req, res) {
  try {
    const reviewId = req.params.id;
    const removedId = await reviewService.remove(reviewId);
    res.send(removedId);
  } catch (err) {
    logger.error('Failed to remove review', err);
    res.status(500).send({ err: 'Failed to remove review' });
  }
}
