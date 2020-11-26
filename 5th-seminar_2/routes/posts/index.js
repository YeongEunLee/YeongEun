const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');
const upload = require('../../modules/multer');


router.post('/', upload.single('image'), postController.createPost);

router.get('/', postController.readAllPosts);
router.post('/:postId/like', postController.createLike);
router.delete('/:postId/like', postController.deleteLike);

module.exports = router;
