// connect to server and thought controller data 
const router = require('express').Router();
const {
    getAllThoughts, 
    createThought, 
    getThoughtById, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts --> GET, POST
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId --> GET, PUT, DELETE
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions --> POST, DELETE
router
    .route('/thoughtId/reactions')
    .post(addReaction)
router
    .route('/:thoughtId/reactions/:reactionId')
    delete(deleteReaction)

module.exports = router;