import { IUser, UserModel } from './schemas/user.schema';
import { UserRoleModel } from '../roles/schemas/user-roles.schema';
import { UserImageModel } from './schemas/user-images.schema';
import mongoose from 'mongoose';

export class UserService {
  async createUser(userData: IUser) {
    try {
      if (!userData.email || !userData.code || !userData.phone || !userData.password) {
        return {  message : 'All required parameters (email, code, phone, password) must be provided'};
      }
      
      const existingDetails = await UserModel.find({
        $or: [
          { email: userData.email },
          { code: userData.code },
          { phone: userData.phone },
        ],
      }).lean();
  
      if (existingDetails.length > 0) {
        throw new Error('User with the same email, code, or phone already exists');
      }

      const user = await UserModel.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      // Soft delete the user by updating the deleted_at field
      await UserModel.findByIdAndUpdate(userId, { deleted_at: new Date() });
    } catch (error) {
      throw error;
    }
  }

  async getUserWithRolesAndImages(userId: string) {
    try {
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return null;
      }
  
      const userWithRolesAndImages = await UserModel.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(userId) }, // Match the user by ID
        },
        {
          $lookup: {
            from: 'userroles', // Assuming the collection name for user roles is 'userroles'
            localField: '_id',
            foreignField: 'user_id',
            as: 'roles',
          },
        },
        {
          $lookup: {
            from: 'userimages', // Assuming the collection name for user images is 'userimages'
            localField: '_id',
            foreignField: 'user_id',
            as: 'images',
          },
        },
        {
          $project: {
            _id: 1,
            firstname: 1,
            lastName: 1,
            email: 1,
            // Add other user fields as needed
            roles: 1,
            images: 1,
          },
        },
      ]);
      
      if (userWithRolesAndImages.length === 0) {
        return { message: "Data not found!"};
      }
      
      return userWithRolesAndImages[0]; // Return the first (and only) result
      
  
      return userWithRolesAndImages;
    } catch (error) {
      throw error;
    }
  }
  

  async getAllUsersWithAssignedRoles() {
    try {
      // Fetch all users with assigned roles (exclude deleted records)
      // const users = await UserModel.find({ deleted_at: null}).populate('').lean();
      const users = await UserModel.aggregate([
        {
          $lookup: {
            from: 'userroles', // Assuming the collection name for user roles is 'userroles'
            localField: '_id',
            foreignField: 'user_id',
            as: 'roles',
          },
        },
        {
          $match: { deleted_at: null }, // Exclude deleted records
        },
      ]);
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: string){
    try {
      // Fetch a single user with all fields & images
      const user = await UserModel.findById(userId)
        .populate('roles')
        .populate('images');
      return user;
    } catch (error) {
      throw error;
    }
  }
  async updateUser(userId: string, updatedData: IUser){
    try {

      const existingUserWithEmail = await UserModel.findOne({
        $and: [{ _id: { $ne: userId } }, { email: updatedData.email }],
      });

      if (existingUserWithEmail) {
        throw new Error('Email already exists');
      }

      
      const existingUserWithPhone = await UserModel.findOne({
        $and: [{ _id: { $ne: userId } }, { phone: updatedData.phone }],
      });

      if (existingUserWithPhone) {
        throw new Error('Phone number already exists');
      }

      
      const existingUserWithCode = await UserModel.findOne({
        $and: [{ _id: { $ne: userId } }, { code: updatedData.code }],
      });

      if (existingUserWithCode) {
        throw new Error('Code already exists');
      }

      
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
        new: true, // Return the updated user
      });

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
  
  
  async softDeleteUser(userId: string){
    try {
      // Check if the user exists
      const user = await UserModel.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Implement soft delete by updating the 'deleted_at' field
      await UserModel.findByIdAndUpdate(userId, { deleted_at: new Date() });

      return { message : "User delete softly!"}
    } catch (error) {
      throw error;
    }
  }

}

