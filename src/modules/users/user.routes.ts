import express from 'express';
import { UserController} from './user.controller';
import { UserService } from './users.service';


export const userRouter = express.Router();
const userService = new UserService();
const userController = new UserController();

userRouter.post('/create', userController.createUser);
userRouter.get('/', userController.getAllUsersWithAssignedRoles);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/:userId/allDetails', userController.getUserWithRolesAndImages);
userRouter.put('/users/:id', userController.updateUser);
userRouter.delete('/users/:id', userController.softDeleteUser);
