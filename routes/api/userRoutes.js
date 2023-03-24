const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require ('../../controllers/userController');

// get all users and create new users
router.route('/').get(getUsers).post(createUser);

// get, update, and delete existing users by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add/remove friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;