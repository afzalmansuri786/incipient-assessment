import express from 'express';
import { UserImageController } from './user-images.controller';

const userImageController = new UserImageController();
export const userImageRouter = express.Router();

userImageRouter.post('/upload', userImageController.createUserImage);
userImageRouter.get('/:id', userImageController.getUserImageById);
userImageRouter.put('/:id', userImageController.updateUserImage);
userImageRouter.delete('/:id', userImageController.deleteUserImage);
