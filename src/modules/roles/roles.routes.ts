import express from 'express';
import { RoleController } from './roles.controller';
import { RoleService } from './roles.service';

const roleService = new RoleService();
const roleController = new RoleController()

export const roleRouter = express.Router();

roleRouter.use((req,res,next) => {
  console.warn('Role router is connected !')
  next();
})

roleRouter.post('/create-role', roleController.createRole);
roleRouter.get('/', roleController.getAllRoles);
roleRouter.get('/:id', roleController.getRoleById);
roleRouter.put('/:id', roleController.updateRole);
roleRouter.delete('/:id', roleController.deleteRole);