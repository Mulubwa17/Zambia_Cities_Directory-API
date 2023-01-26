// Admin.model.ts
import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

// Create the interface
export default interface IAdmin {
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  resetPin: string;
  isActive: boolean;
  token: string;
}

// Create the schema
const AdminSchema = new Schema<IAdmin>(
  {
    userType: {
        type:String,
        default: "Admin",
        enum:["Admin"],

    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
      visible: true
    },

    gender: {
      type: String,
      required: true,
      default: "Male",
      enum: ["Male","Female","Other"]
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    resetPin: {
      type: String,
      required: false
    },
    token: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

AdminSchema.pre('save', async function (next) {
  const Admin = this;
  if (Admin.isModified('password')) {
    Admin.password = await bcryptjs.hash(Admin.password, 12);
  }
  next();
 });

// Create and export Admin model
export const Admin = model<IAdmin>("Admin", AdminSchema);