import express from "express";
import { generateStudy,history } from '../controller/studyController.js';
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get('/history', protect, history);
router.post("/generate-study-material", protect, generateStudy);

export default router;