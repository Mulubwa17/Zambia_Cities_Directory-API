"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/zambia-cities';
const db = () => {
    mongoose_1.default.connect(MONGO_URI, (err) => {
        if (err) {
            logger_1.default.error(err.message);
        }
        else {
            logger_1.default.info("Database Successfully Connected!");
        }
    });
};
exports.db = db;
