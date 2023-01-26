import { Request, Response } from "express";
import { Admin } from "../models/admin";


export const newAdmin = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, gender, email } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res
        .status(409)
        .send({message: "User with email already exists!"});
    }
    const newAdmin = new Admin({ firstName, lastName, gender, email });
    await newAdmin.save();
    // sendMail(newAdmin.email);
    res.status(201).send({ data: newAdmin, message: "Admin created" });
  } catch (error:any) {
    res.status(500).send({ message: error.message });
  }
};

export const getAdmins = async (req: Request, res: Response) => {
  Admin.find({}, (err: any, admin: any) => {
    if (err) {
      res.status(404).send({ message: "Admins not found" });
    }
    res.status(200).send({ data: admin, message: "Admins found" });
  });
};

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findById({ _id: req.params.id });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    res.status(200).send({ data: admin });
  } catch (error:any) {
    res.status(500).send({ message:error.message });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    Admin.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err: any, admin: any) => {
        if (err) {
          res.status(404).send({ message: "Admin not found" });
        }
        res.status(200).send({ data: admin, message: "Admin updated" });
      }
    );
  } catch (error:any) {
    res.status(500).send({ message:error.message });
  }
};

export const deactivateAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findByIdAndRemove({ _id: req.params.id });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    res
      .status(200)
      .send({ data: admin, message: "Admin successfully deleted!" });
  } catch (error:any) {
    res.status(500).send({ message:error.message });
  }
};