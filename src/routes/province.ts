import express from "express";
import {
  deleteProvince,
  getProvince,
  getProvinceByName,
  getProvinces,
  newProvince,
  updateProvince,
} from "../controllers/province";

const router = express.Router();

router.post("/new_Province", newProvince);

router.get("/list", getProvinces);

router.get("/profile/:id", getProvince);

router.get("/profile_name/:name", getProvinceByName);

router.put("/edit_province/:id", updateProvince);

router.delete("/remove_province/:id", deleteProvince);

export { router as provinceRoutes };