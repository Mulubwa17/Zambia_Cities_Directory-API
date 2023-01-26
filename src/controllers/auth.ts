import { Request, Response } from "express";
import { Admin } from "../models/admin";
import logger from "../utils/logger";
import bcryptjs from "bcryptjs";
import { generateAuthToken } from "../utils/jwtMiddleware";

export const setPassword = async (req: Request, res: Response) => {

    try {
      const { password, email  } = req.body;
  
      const admin = await Admin.findOne({ email});
  
      if (!admin) {
        return res.status(404).send({message:"Admin with that email doesn''t exist"});
      }
    
      if (admin) {
        admin.password = password;
        admin.isActive = true;
        admin.save();
      }
  
      res.status(200).send({ message:"Password set successfully",});
    } catch (error: any) {
      logger.error(error);
      res.status(500).send({message:error.message});
    }
  };
  
  export const signIn = async (req: Request, res: Response) => {
    try {
      const { email, username, password } = req.body;
      let findUser;
      
      findUser = await Admin.findOne({email});
  
      if (!findUser) {
        return res.status(404).send({message: "Invalid login credentials"});
      }
  
      if (findUser) {
        if (findUser.isActive === false ) {
          return res
            .status(401)
            .send({ message: "Your account is not authorized to use the system!"});
        }
        const isMatch = await bcryptjs.compare(password, findUser.password);
  
        if (isMatch) {
          const token = generateAuthToken(findUser);
          findUser.token = token;
          res.status(200).send({ message: "LogIn Successful!", data: findUser });
        } else {
          return res.status(401).send({message: "Password is incorrect!"});
         }
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).send({messgae: error.message});
    }
  };
  
  export const forgotPassword = async (req: Request, res: Response) => {
  
    try {
      const { email } = req.body;
      let findUser;
  
      findUser = await Admin.findOne({email});
  
      if (!findUser) {
        return res.status(404).send({message: "User with that email doesn''t exist"});
      }
  
      if (findUser) {
        const pin = Math.random().toString(36).slice(3, 7);
        findUser.resetPin = `${pin}`;
        findUser.save();
        // sendMailForgotPassword(email,pin);
        res
          .status(200)
          .send({
            message: "Password reset link sent to your email!",
            data: findUser.resetPin
          });
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).send({message:error.message});
    }
  };
  
  export const resetPassword = async (req: Request, res: Response) => {
    try {
      const { resetPin, password } = req.body;
      let findUser;
      findUser = await Admin.findOne({resetPin});
  
      if (!findUser) {
        return res.status(404).send({message:"Invalid reset pin"});
      }
  
      if (findUser) {
        if (findUser.resetPin === resetPin) {
          findUser.password = password;
          findUser.resetPin = "";
          findUser.save();
          return res.status(200).send({ message: "Password reset successful!", data: findUser });
        }else {
    
          return res.status(404).send({message:"Invalid reset pin"});
        }
  
      } else {
        throw new Error("Could not set password, try again!");
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).send({message: error.message});
    }
  };