import { IUserImage, UserImageModel } from '../schemas/user-images.schema';

export class UserImageService {
  async createUserImage(userImageData: IUserImage){
    try {
      const userImage = await UserImageModel.create(userImageData);
      return userImage;
    } catch (error) {
      throw error;
    }
  }

  async getUserImageById(userImageId: string){
    try {
      const userImage = await UserImageModel.findById(userImageId);
      return userImage;
    } catch (error) {
      throw error;
    }
  }

  async updateUserImage(userImageId: string, updatedData: IUserImage){
    try {
      const userImage = await UserImageModel.findByIdAndUpdate(userImageId, updatedData, {
        new: true,
      });
      return userImage;
    } catch (error) {
      throw error;
    }
  }

  async deleteUserImage(userImageId: string){
    try {
      await UserImageModel.findByIdAndDelete(userImageId);
    } catch (error) {
      throw error;
    }
  }
}
