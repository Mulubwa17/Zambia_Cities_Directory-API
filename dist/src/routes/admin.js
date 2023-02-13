"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controllers/admin");
const router = express_1.default.Router();
exports.adminRoutes = router;
router.post('/new_admin', admin_1.newAdmin);
router.get('/view_admins', admin_1.getAdmins);
router.get('/view_admin/:id', admin_1.getAdmin);
router.put('/edit_admin/:id', admin_1.updateAdmin);
router.delete('/remove_admin/:id', admin_1.deactivateAdmin);
