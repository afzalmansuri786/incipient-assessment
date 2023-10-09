import { Request, Response } from 'express';
import { RoleService} from './roles.service';

const roleService = new RoleService();

export class RoleController {

  async createRole(req: Request, res: Response) {
    try {
      const role = await roleService.createRole(req.body);
      res.json(role);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await roleService.getAllRoles();
       res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getRoleById(req: Request, res: Response) {
    try {
      const roleId = req.params.id;
      const role = await roleService.getRoleById(roleId);

      if (!role) {
        res.status(404).json({ error: 'Role not found' });
        return;
      }

      res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updateRole(req: Request, res: Response) {
    try {
      const roleId = req.params.id;
      const updatedRole = await roleService.updateRole(roleId, req.body);
      res.status(200).json(updatedRole);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async deleteRole(req: Request, res: Response) {
    try {
      const roleId = req.params.id;
      const result = await roleService.deleteRole(roleId);
      res.send(result);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
