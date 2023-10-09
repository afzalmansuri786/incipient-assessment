import { IUserRole, UserRoleModel } from '../schemas/user-roles.schema';

export class UserRoleService {
  async createUserRole(userRoleData: IUserRole){
    try {
      if(!userRoleData.user_id || !userRoleData.role_id){
        return { message:" user_id and role_id required!"}
      }
      const userRole = await UserRoleModel.create(userRoleData);
      return userRole;
    } catch (error) {
      throw error;
    }
  }

  async getAllUserRoles(){
    try {
      const userRoles = await UserRoleModel.find();
      return userRoles;
    } catch (error) {
      throw error;
    }
  }

  async getUserRoleById(userRoleId: string){
    try {
      const userRole = await UserRoleModel.findById(userRoleId);
      return userRole;
    } catch (error) {
      throw error;
    }
  }

  async updateUserRole(userRoleId: string, updatedData: IUserRole){
    try {
      const userRole = await UserRoleModel.findByIdAndUpdate(userRoleId, updatedData, {
        new: true,
      });
      return userRole;
    } catch (error) {
      throw error;
    }
  }

  async deleteUserRole(userRoleId: string){
    try {
      await UserRoleModel.findByIdAndDelete(userRoleId);
    } catch (error) {
      throw error;
    }
  }
}
