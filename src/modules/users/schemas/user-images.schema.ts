import mongoose, { Document, Schema } from 'mongoose';

export interface IUserImage extends Document {
  user_id: string;
  image: string;
}

const UserImageSchema: Schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const UserImageModel =  mongoose.model<IUserImage>('UserImage', UserImageSchema);
