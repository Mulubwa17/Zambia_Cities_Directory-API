"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
// import { checkAuthToken } from '../utils/jwtMiddleware';
const router = express_1.default.Router();
exports.authRoutes = router;
router.post('/set_password', auth_1.setPassword);
router.post('/login', auth_1.signIn);
router.post('/forgot_password', auth_1.forgotPassword);
router.post('/reset_password', auth_1.resetPassword);
