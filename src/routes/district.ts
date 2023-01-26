import express from "express";
import {
  deleteDistrict,
  getDistrict,
  getDistrictByName,
  getDistricts,
  getDistrictsByProvince,
  getDistrictsByProvinceName,
  newDistrict,
  updateDistrict,
} from "../controllers/district";

const router = express.Router();

router.post("/district/new_district", newDistrict);

router.get("/district/list", getDistricts);

router.get("/district/list_province/:provinceId", getDistrictsByProvince);

router.get("/district/list_province_name/:name", getDistrictsByProvinceName);

router.get("/district/profile/:id", getDistrict);

router.get("/district/profile_name/:name", getDistrictByName);

router.put("/district/edit_district/:id", updateDistrict);

router.delete("/district/remove_district/:id", deleteDistrict);

export { router as districtRoutes };
