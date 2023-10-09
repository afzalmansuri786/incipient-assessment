import mongoose, { Document, Schema } from 'mongoose';

export interface IUserRole extends Document {
  user_id: string;
  role_id: string;
}

const UserRoleSchema: Schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
});

export const UserRoleModel =  mongoose.model<IUserRole>('UserRole', UserRoleSchema);
