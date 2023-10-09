import { Request, Response } from 'express';
import {UserService}from './users.service';

const userService= new UserService();

export class UserController {
  constructor(){}

  async createUser(req: Request, res: Response){
    try {
      const user = await userService.createUser(req.body);
      
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }


  async getUserWithRolesAndImages(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const user = await userService.getUserWithRolesAndImages(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error  });
    }
  }


  async getAllUsersWithAssignedRoles(req: Request, res: Response){
    try {
      const users = await userService.getAllUsersWithAssignedRoles();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getUserById(req: Request, res: Response){
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async softDeleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;

      // Check if the user exists
      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      await userService.softDeleteUser(userId);

      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async updateUser(req: Request, res: Response){
    try {
      const userId = req.params.id;
      const updatedData = req.body;

      // Check if the request includes new images
      const newImages = updatedData.images;

      const updatedUser = await userService.updateUser(userId, updatedData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
