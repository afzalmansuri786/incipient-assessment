import { Request, Response } from 'express';
import { UserImageService } from './user-images.service';

const userImageService = new UserImageService();

export class UserImageController {
  async createUserImage(req: Request, res: Response) {
    try {
      const userImageData = req.body;
      const userImage = await userImageService.createUserImage(userImageData);
      res.status(201).json(userImage);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getUserImageById(req: Request, res: Response) {
    try {
      const userImageId = req.params.id;
      const userImage = await userImageService.getUserImageById(userImageId);

      if (!userImage) {
        res.status(404).json({ error: 'User image not found' });
        return;
      }

      res.status(200).json(userImage);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updateUserImage(req: Request, res: Response) {
    try {
      const userImageId = req.params.id;
      const updatedData = req.body;
      const updatedUserImage = await userImageService.updateUserImage(userImageId, updatedData);
      res.status(200).json(updatedUserImage);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async deleteUserImage(req: Request, res: Response) {
    try {
      const userImageId = req.params.id;
      await userImageService.deleteUserImage(userImageId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
