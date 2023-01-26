
import { Request, Response } from "express";
import { District } from "../models/district";
import logger from "../utils/logger";
import _, { omit } from "lodash";
import { Province } from "../models/province";

  
  export const newDistrict = async (req: Request, res: Response) => {
    try {
      const { name, population, province } = req.body;

      const districtName = await District.findOne({name});

      if (districtName){
          res.status(404).send({ message: "District already exists" });
      }
  
      const newDistrict = new District({ name, population, province });
      await newDistrict.save();
  
      res.status(201).send({ data: newDistrict, message: 'District added to province successfully' });
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
  };

export const getDistricts = async (req: Request, res: Response) => {
    District.find({}, (err: any, district: any) => {
      if (err) {
        res.status(404).send({ message: "Provinces not found" });
      }
      res.status(200).send({ data: district, message: "Provinces found" });
    }).populate('province','-id -__v');
  };

export const getDistrict = async (req: Request, res: Response) => {
    try {
      const district = await District.findById({ _id: req.params.id }).populate('province','-id -__v');
      if (!district) {
        res.status(404).send({ message: "District not found" });
      }
      res.status(200).send({ data: district, message: "District found"  });
    } catch (error:any) {
      res.status(500).send({ message:error.message });
    }
  };

  export const getDistrictByName = async (req: Request, res: Response) => {
    try {
      const district = await District.findOne({ name: req.params.name }).populate('province','-id -__v');
      if (!district) {
        res.status(404).send({ message: "District not found" });
      }
      res.status(200).send({ data: district, message: "District found"  });
    } catch (error:any) {
      res.status(500).send({ message:error.message });
    }
  };

export const getDistrictsByProvince = async (req: Request, res: Response) => {
    try {
      const {provinceId} = req.params;

      const province = await Province.findById({ _id: provinceId }).exec();
      if (province){
      const district = await District.find({ province: province?._id });
      if (!district) {
        res.status(404).send({ message: "District not found" });
      }
      res.status(200).send({ data: district, message: 'Districts found!' });
    }
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
  };

  export const getDistrictsByProvinceName = async (req: Request, res: Response) => {
    try {
      const { name }  = req.params;
      
      const province = await Province.findOne({ name }).exec();
      
      if (province){
      const district = await District.find({province: province._id});
      if (!district) {
        res.status(404).send({ message: "District not found" });
      }
      res.status(200).send({ data: district, message: 'Districts found!' });
      }
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
  };

export const updateDistrict = async (req: Request, res: Response) => {
    try {
      District.findByIdAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true },
          (err: any, district: any) => {
            if (err) {
              res.status(404).send({ message: "Province not found" });
            }
            res.status(200).send({ data: district, message: "Province updated" });
          }
      );
    } catch (error:any) {
      res.status(500).send({ message:error.message });
    }
  };

export const deleteDistrict = async (req: Request, res: Response) => {
    try {
      const district = await District.findByIdAndRemove({ _id: req.params.id });
      if (!district) {
        res.status(404).send({ message: "Province not found" });
      }
      res
        .status(200)
        .send({ data: district, message: "Province successfully deleted!" });
    } catch (error:any) {
      res.status(500).send({ message:error.message });
    }
};