"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtRoutes = void 0;
const express_1 = __importDefault(require("express"));
const district_1 = require("../controllers/district");
const router = express_1.default.Router();
exports.districtRoutes = router;
router.post("/district/new_district", district_1.newDistrict);
router.get("/district/list", district_1.getDistricts);
router.get("/district/list_province/:provinceId", district_1.getDistrictsByProvince);
router.get("/district/list_province_name/:name", district_1.getDistrictsByProvinceName);
router.get("/district/profile/:id", district_1.getDistrict);
router.get("/district/profile_name/:name", district_1.getDistrictByName);
router.put("/district/edit_district/:id", district_1.updateDistrict);
router.delete("/district/remove_district/:id", district_1.deleteDistrict);
