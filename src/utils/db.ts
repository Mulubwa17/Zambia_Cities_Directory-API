import dotenv from 'dotenv';
import mongoose from "mongoose";
import logger  from './logger';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI ||'mongodb://127.0.0.1/lgaz';

export const db = () => {

mongoose.connect(MONGO_URI, (err: any) => {
  if (err) {
    logger.error(err.message);
  } else {
    logger.info("Database Successfully Connected!");
  }
});
}
