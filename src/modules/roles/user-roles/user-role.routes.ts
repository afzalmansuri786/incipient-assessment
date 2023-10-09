import express from 'express';
import { UserRoleController } from './user-role.controller';

const userRoleController = new UserRoleController();

export const userRoleRouter = express.Router();

userRoleRouter.post('/create', userRoleController.createUserRole);
userRoleRouter.get('/', userRoleController.getAllUserRoles);
userRoleRouter.get('/:id', userRoleController.getUserRoleById);
userRoleRouter.put('/:id', userRoleController.updateUserRole);
userRoleRouter.delete('/:id', userRoleController.deleteUserRole);
