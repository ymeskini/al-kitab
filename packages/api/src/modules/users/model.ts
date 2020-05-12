import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface {
  email: string;
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

type UserModel = UserInterface & Document;

export const User = mongoose.model<UserModel>('User', UserSchema);
