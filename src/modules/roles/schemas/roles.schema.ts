import mongoose, { Document, Schema } from 'mongoose';

export interface IRole extends Document {
  name: string;
}

const RoleSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
},{timestamps: true});

export const RoleModel =  mongoose.model<IRole>('Role', RoleSchema);
