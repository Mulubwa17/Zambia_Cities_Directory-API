"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const db_1 = require("./utils/db");
const logger_1 = __importDefault(require("./utils/logger"));
const httpLogger_1 = __importDefault(require("./utils/httpLogger"));
const admin_1 = require("./routes/admin");
const auth_1 = require("./routes/auth");
const province_1 = require("./routes/province");
const provinceData_1 = require("./utils/provinceData");
const district_1 = require("./routes/district");
"./config/logger";
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
(0, db_1.db)();
app.use(httpLogger_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.static(`${__dirname}/public/uploads`));
(0, provinceData_1.preloadLusakaData)();
(0, provinceData_1.preloadCentralData)();
(0, provinceData_1.preloadLuapulaData)();
(0, provinceData_1.preloadCopperbeltData)();
(0, provinceData_1.preloadNorthWesternData)();
(0, provinceData_1.preloadNorthernData)();
(0, provinceData_1.preloadEasternData)();
(0, provinceData_1.preloadMuchingaData)();
(0, provinceData_1.preloadWesternData)();
(0, provinceData_1.preloadSouthernData)();
app.use("/api/v1/Admin", admin_1.adminRoutes);
app.use("/api/v1/Auth", auth_1.authRoutes);
app.use("/api/v1/Province", province_1.provinceRoutes);
app.use("/api/v1/District", district_1.districtRoutes);
app.get("/", (req, res) => {
    logger_1.default.error("This is an error log");
    logger_1.default.warn("This is a warn log");
    logger_1.default.info("This is a info log");
    logger_1.default.http("This is a http log");
    logger_1.default.debug("This is a debug log");
    res.status(200).send({
        status: "success",
        message: "Welcome to the Zambia Provinces, Cities & Districts directory Server",
    });
});
app.listen(PORT, () => {
    logger_1.default.info(`Zambia PCD Server started on port ${PORT}`);
});
exports.default = app;
