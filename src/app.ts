import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./utils/db";
import  logger from "./utils/logger";
import morganMiddleware from "./utils/httpLogger";
import { adminRoutes } from "./routes/admin";
import { authRoutes } from "./routes/auth";
import { provinceRoutes } from "./routes/province";
import {  preloadCentralData, preloadCopperbeltData, preloadEasternData, preloadLuapulaData,  preloadLusakaData,  preloadMuchingaData, preloadNorthernData, preloadNorthWesternData, preloadSouthernData, preloadWesternData } from "./utils/provinceData";
import { districtRoutes } from "./routes/district";

 "./config/logger";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app: Application = express();

db();

app.use(morganMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.static(`${__dirname}/public/uploads`));

preloadLusakaData();
preloadCentralData();
preloadLuapulaData();
preloadCopperbeltData();
preloadNorthWesternData();
preloadNorthernData();
preloadEasternData();
preloadMuchingaData();
preloadWesternData();
preloadSouthernData();

app.use("/api/v1/Admin", adminRoutes);
app.use("/api/v1/Auth", authRoutes);
app.use("/api/v1/Province", provinceRoutes);
app.use("/api/v1/District", districtRoutes);



app.get("/api/v1/health", (req:Request, res:Response) => {
  logger.error("This is an error log");
  logger.warn("This is a warn log");
  logger.info("This is a info log");
  logger.http("This is a http log");
  logger.debug("This is a debug log");
  res.status(200).send({
    status: "success",
    message: "Welcome to the Zambia Provinces, Cities & Districts directory Server",
  });
});

app.listen(PORT, () => {
 logger.info(`Zambia PCD Server started on port ${PORT}`);
});

export default app;

