import { IRole, RoleModel } from './schemas/roles.schema';
// import { IUser, User } from '../users/schemas/user.schema';
import { UserRoleModel } from './schemas/user-roles.schema';

export class RoleService {
  async createRole(roleData:any){
    try {
      const isRoleExist = await RoleModel.findOne({name: roleData.name});

      if(isRoleExist){
        return {message: "Role already exist !"}
      }

      const role = await RoleModel.create(roleData);
      return role;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  async getAllRoles() : Promise<any> {
    try {
      const roles = await RoleModel.find({});
      return roles;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  async getRoleById(roleId: string): Promise<IRole | null> {
    try {
      const role = await RoleModel.findById(roleId);
      return role;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  async updateRole(roleId: string, updatedData: IRole): Promise<IRole | null> {
    try {
      const role = await RoleModel.findByIdAndUpdate(roleId, updatedData, {
        new: true, // Return the updated role
      });
      return role;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  async deleteRole(roleId: string){
    try {
      // Check if the role is assigned to any user
      const isRoleAssigned = await UserRoleModel.findOne({role_id:roleId});
      if (isRoleAssigned == null) {
        return { message : 'Role is assigned and cannot be deleted.'};
      }

      await RoleModel.findByIdAndDelete(roleId);
      return {message : "Role deleted successfully!"}
    } catch (error) {
      console.error(error)
      throw error;
    }
  }
}
