const express = require('express');
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
const { log } = require('../../middlewares/logger.middleware');
const {
  getReviews,
  getReviewById,
  addReview,
  updateReview,
  removeReview,
} = require('./review.controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getReviews);
router.get('/:id', getReviewById);
router.post('/', requireAuth, addReview);
router.put('/:id', requireAuth, updateReview);
router.delete('/:id', requireAuth, requireAdmin, removeReview);

module.exports = router;
