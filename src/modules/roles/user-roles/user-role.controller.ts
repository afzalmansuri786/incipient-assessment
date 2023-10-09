import { Request, Response } from 'express';
import { UserRoleService } from './user-role.service';


const userRoleService = new UserRoleService()

export class UserRoleController {
  async createUserRole(req: Request, res: Response) {
    try {
      const userRoleData = req.body;
      const userRole = await userRoleService.createUserRole(userRoleData);
      res.status(201).json(userRole);
    } catch (error) {
      res.status(400).json({ error  });
    }
  }

  async getAllUserRoles(req: Request, res: Response) {
    try {
      const userRoles = await userRoleService.getAllUserRoles();
      res.status(200).json(userRoles);
    } catch (error) {
      res.status(500).json({ error  });
    }
  }

  async getUserRoleById(req: Request, res: Response) {
    try {
      const userRoleId = req.params.id;
      const userRole = await userRoleService.getUserRoleById(userRoleId);

      if (!userRole) {
        res.status(404).json({ error: 'User role not found' });
        return;
      }

      res.status(200).json(userRole);
    } catch (error) {
      res.status(500).json({ error  });
    }
  }

  async updateUserRole(req: Request, res: Response) {
    try {
      const userRoleId = req.params.id;
      const updatedData = req.body;
      const updatedUserRole = await userRoleService.updateUserRole(userRoleId, updatedData);
      res.status(200).json(updatedUserRole);
    } catch (error) {
      res.status(400).json({ error  });
    }
  }

  async deleteUserRole(req: Request, res: Response) {
    try {
      const userRoleId = req.params.id;
      await userRoleService.deleteUserRole(userRoleId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error  });
    }
  }
}
