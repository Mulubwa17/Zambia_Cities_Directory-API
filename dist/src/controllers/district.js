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
exports.deleteDistrict = exports.updateDistrict = exports.getDistrictsByProvinceName = exports.getDistrictsByProvince = exports.getDistrictByName = exports.getDistrict = exports.getDistricts = exports.newDistrict = void 0;
const district_1 = require("../models/district");
const province_1 = require("../models/province");
const newDistrict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, population, province } = req.body;
        const districtName = yield district_1.District.findOne({ name });
        if (districtName) {
            res.status(404).send({ message: "District already exists" });
        }
        const newDistrict = new district_1.District({ name, population, province });
        yield newDistrict.save();
        res.status(201).send({ data: newDistrict, message: 'District added to province successfully' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.newDistrict = newDistrict;
const getDistricts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    district_1.District.find({}, (err, district) => {
        if (err) {
            res.status(404).send({ message: "Provinces not found" });
        }
        res.status(200).send({ data: district, message: "Provinces found" });
    }).populate('province', '-id -__v');
});
exports.getDistricts = getDistricts;
const getDistrict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const district = yield district_1.District.findById({ _id: req.params.id }).populate('province', '-id -__v');
        if (!district) {
            res.status(404).send({ message: "District not found" });
        }
        res.status(200).send({ data: district, message: "District found" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getDistrict = getDistrict;
const getDistrictByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const district = yield district_1.District.findOne({ name: req.params.name }).populate('province', '-id -__v');
        if (!district) {
            res.status(404).send({ message: "District not found" });
        }
        res.status(200).send({ data: district, message: "District found" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getDistrictByName = getDistrictByName;
const getDistrictsByProvince = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { provinceId } = req.params;
        const province = yield province_1.Province.findById({ _id: provinceId }).exec();
        if (province) {
            const district = yield district_1.District.find({ province: province === null || province === void 0 ? void 0 : province._id });
            if (!district) {
                res.status(404).send({ message: "District not found" });
            }
            res.status(200).send({ data: district, message: 'Districts found!' });
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getDistrictsByProvince = getDistrictsByProvince;
const getDistrictsByProvinceName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const province = yield province_1.Province.findOne({ name }).exec();
        if (province) {
            const district = yield district_1.District.find({ province: province._id });
            if (!district) {
                res.status(404).send({ message: "District not found" });
            }
            res.status(200).send({ data: district, message: 'Districts found!' });
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getDistrictsByProvinceName = getDistrictsByProvinceName;
const updateDistrict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        district_1.District.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, district) => {
            if (err) {
                res.status(404).send({ message: "Province not found" });
            }
            res.status(200).send({ data: district, message: "Province updated" });
        });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.updateDistrict = updateDistrict;
const deleteDistrict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const district = yield district_1.District.findByIdAndRemove({ _id: req.params.id });
        if (!district) {
            res.status(404).send({ message: "Province not found" });
        }
        res
            .status(200)
            .send({ data: district, message: "Province successfully deleted!" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deleteDistrict = deleteDistrict;
