const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require ('../../controllers/thoughtController');

// get all thoughts and create new thoughts
router.route('/').get(getThoughts).post(createThought);

// get, update, and delete single existing thoughts by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// create reactions
router.route('/:thoughtId/reactions/').post(createReaction);

// delete reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;