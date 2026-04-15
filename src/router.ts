import express from 'express'
import { CreateUserController } from './modules/users/controllers/CreateUserController';
import { ReadUsersController } from './modules/users/controllers/ReadUsersController';
import { UpdateUserController } from './modules/users/controllers/UpdateUserController';
const router = express.Router();
const UserController = new CreateUserController();
router.post('/users', (req, res) => UserController.handle(req, res));
const readUsersController = new ReadUsersController();
router.get('/users', (req, res) => readUsersController.handle(req, res));
const updateUsersControlle = new UpdateUserController();
router.put('/users/:id', (req, res) => updateUsersControlle.handle(req, res));
export { router}



