const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Matches with "/api/posts"
router.route("/posts")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/posts/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;