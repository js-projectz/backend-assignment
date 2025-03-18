import express from 'express';
import {
    registerUser,
    deleteUser,
    getUser,
    loginUser,
    updateUser
} from '../controllers/userController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile')
    .get(auth, getUser)
    .patch(auth, updateUser)
    .delete(auth, deleteUser);


export default router;