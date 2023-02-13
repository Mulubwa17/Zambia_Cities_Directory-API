"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthToken = exports.checkAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuthToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(401).json('Unauthorized user');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "stanbic1234");
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).json('Token not valid');
    }
};
exports.checkAuthToken = checkAuthToken;
const generateAuthToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_TOKEN || "stanbic1234", {
        expiresIn: '1h',
    });
    return token;
};
exports.generateAuthToken = generateAuthToken;
