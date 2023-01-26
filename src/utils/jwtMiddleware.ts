import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const checkAuthToken = (req: Request, res: Response, next: NextFunction) => {
 
   const token = req.headers['authorization']
  if (!token) return res.status(401).json('Unauthorized user')
  try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET || "stanbic1234");
        (<any>req).user =  decoded
        next()
  } catch (error) {
    res.status(400).json('Token not valid')
  }
}

export const generateAuthToken = (user: any): string => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN || "stanbic1234", {
      expiresIn: '1h',
    });
  
    return token;
  };