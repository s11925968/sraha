import { Router } from "express";
import * as MessageController from './message.conroller.js'
const router=Router();
router.get('/',MessageController.getMessages);

export default router;