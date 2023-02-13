"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const mongoose_1 = require("mongoose");
const ProvinceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    capital: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
});
ProvinceSchema.virtual("districts", {
    ref: "District",
    localField: "_id",
    foreignField: "province",
});
exports.Province = (0, mongoose_1.model)("Province", ProvinceSchema);
