import express from 'express';
import { deactivateAdmin, getAdmin, getAdmins, newAdmin, updateAdmin } from '../controllers/admin';



const router = express.Router();

router.post('/new_admin',newAdmin);

router.get('/view_admins',getAdmins);

router.get('/view_admin/:id',getAdmin);

router.put('/edit_admin/:id',updateAdmin);

router.delete('/remove_admin/:id',deactivateAdmin);

export { router as adminRoutes };