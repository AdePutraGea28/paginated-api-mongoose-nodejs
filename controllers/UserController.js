import User from '../models/UserModel.js';

export const getAllUser = async (req, res) => {
  res.json(res.paginatedResults);
};

export const createNewUser = async (req, res) => {
  try {
    const save = await User.create(req.body);
    res.json(save);
  } catch (error) {
    console.log(error);
  }
};
