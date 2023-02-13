"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.provinceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const province_1 = require("../controllers/province");
const router = express_1.default.Router();
exports.provinceRoutes = router;
router.post("/new_Province", province_1.newProvince);
router.get("/list", province_1.getProvinces);
router.get("/profile/:id", province_1.getProvince);
router.get("/profile_name/:name", province_1.getProvinceByName);
router.put("/edit_province/:id", province_1.updateProvince);
router.delete("/remove_province/:id", province_1.deleteProvince);
