"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
// Admin.model.ts
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Create the schema
const AdminSchema = new mongoose_1.Schema({
    userType: {
        type: String,
        default: "Admin",
        enum: ["Admin"],
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
        enum: ["Male", "Female", "Other"]
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
AdminSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const Admin = this;
        if (Admin.isModified('password')) {
            Admin.password = yield bcryptjs_1.default.hash(Admin.password, 12);
        }
        next();
    });
});
// Create and export Admin model
exports.Admin = (0, mongoose_1.model)("Admin", AdminSchema);
