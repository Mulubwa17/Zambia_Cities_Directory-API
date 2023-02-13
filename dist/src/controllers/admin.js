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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateAdmin = exports.updateAdmin = exports.getAdmin = exports.getAdmins = exports.newAdmin = void 0;
const admin_1 = require("../models/admin");
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, gender, email } = req.body;
        const admin = yield admin_1.Admin.findOne({ email });
        if (admin) {
            return res
                .status(409)
                .send({ message: "User with email already exists!" });
        }
        const newAdmin = new admin_1.Admin({ firstName, lastName, gender, email });
        yield newAdmin.save();
        // sendMail(newAdmin.email);
        res.status(201).send({ data: newAdmin, message: "Admin created" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.newAdmin = newAdmin;
const getAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    admin_1.Admin.find({}, (err, admin) => {
        if (err) {
            res.status(404).send({ message: "Admins not found" });
        }
        res.status(200).send({ data: admin, message: "Admins found" });
    });
});
exports.getAdmins = getAdmins;
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield admin_1.Admin.findById({ _id: req.params.id });
        if (!admin) {
            res.status(404).send({ message: "Admin not found" });
        }
        res.status(200).send({ data: admin });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getAdmin = getAdmin;
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        admin_1.Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, admin) => {
            if (err) {
                res.status(404).send({ message: "Admin not found" });
            }
            res.status(200).send({ data: admin, message: "Admin updated" });
        });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.updateAdmin = updateAdmin;
const deactivateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield admin_1.Admin.findByIdAndRemove({ _id: req.params.id });
        if (!admin) {
            res.status(404).send({ message: "Admin not found" });
        }
        res
            .status(200)
            .send({ data: admin, message: "Admin successfully deleted!" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deactivateAdmin = deactivateAdmin;
