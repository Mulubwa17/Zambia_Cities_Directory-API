"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.District = void 0;
const mongoose_1 = require("mongoose");
const DistrictSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    population: { type: Number, required: false },
    province: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Province' },
});
exports.District = (0, mongoose_1.model)("District", DistrictSchema);
