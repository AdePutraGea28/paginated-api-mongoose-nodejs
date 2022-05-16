import express from 'express';
import { getAllUser, createNewUser } from '../controllers/UserController.js';
import { paginatedResults } from '../paginatedResults.js';
import UserModel from '../models/UserModel.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});
router.get('/users', paginatedResults(UserModel), getAllUser);
router.post('/users', createNewUser);

export default router;
