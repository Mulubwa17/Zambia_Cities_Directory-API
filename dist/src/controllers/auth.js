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
exports.resetPassword = exports.forgotPassword = exports.signIn = exports.setPassword = void 0;
const admin_1 = require("../models/admin");
const logger_1 = __importDefault(require("../utils/logger"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtMiddleware_1 = require("../utils/jwtMiddleware");
const setPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const admin = yield admin_1.Admin.findOne({ email });
        if (!admin) {
            return res.status(404).send({ message: "Admin with that email doesn''t exist" });
        }
        if (admin) {
            admin.password = password;
            admin.isActive = true;
            admin.save();
        }
        res.status(200).send({ message: "Password set successfully", });
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).send({ message: error.message });
    }
});
exports.setPassword = setPassword;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = req.body;
        let findUser;
        findUser = yield admin_1.Admin.findOne({ email });
        if (!findUser) {
            return res.status(404).send({ message: "Invalid login credentials" });
        }
        if (findUser) {
            if (findUser.isActive === false) {
                return res
                    .status(401)
                    .send({ message: "Your account is not authorized to use the system!" });
            }
            const isMatch = yield bcryptjs_1.default.compare(password, findUser.password);
            if (isMatch) {
                const token = (0, jwtMiddleware_1.generateAuthToken)(findUser);
                findUser.token = token;
                res.status(200).send({ message: "LogIn Successful!", data: findUser });
            }
            else {
                return res.status(401).send({ message: "Password is incorrect!" });
            }
        }
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).send({ messgae: error.message });
    }
});
exports.signIn = signIn;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        let findUser;
        findUser = yield admin_1.Admin.findOne({ email });
        if (!findUser) {
            return res.status(404).send({ message: "User with that email doesn''t exist" });
        }
        if (findUser) {
            const pin = Math.random().toString(36).slice(3, 7);
            findUser.resetPin = `${pin}`;
            findUser.save();
            // sendMailForgotPassword(email,pin);
            res
                .status(200)
                .send({
                message: "Password reset link sent to your email!",
                data: findUser.resetPin
            });
        }
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).send({ message: error.message });
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resetPin, password } = req.body;
        let findUser;
        findUser = yield admin_1.Admin.findOne({ resetPin });
        if (!findUser) {
            return res.status(404).send({ message: "Invalid reset pin" });
        }
        if (findUser) {
            if (findUser.resetPin === resetPin) {
                findUser.password = password;
                findUser.resetPin = "";
                findUser.save();
                return res.status(200).send({ message: "Password reset successful!", data: findUser });
            }
            else {
                return res.status(404).send({ message: "Invalid reset pin" });
            }
        }
        else {
            throw new Error("Could not set password, try again!");
        }
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).send({ message: error.message });
    }
});
exports.resetPassword = resetPassword;
