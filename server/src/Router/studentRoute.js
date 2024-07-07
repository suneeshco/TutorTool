import { Router } from 'express';
import { getAllCourse, getSingleCourse,getAllQuestions , submission } from '../Controllers/studentController.js';
import { authenticateUser } from '../Middlewares/authMiddleware.js';

const router = Router()

router.get('/getAllCourses',authenticateUser, getAllCourse)
router.get('/getAllQuestions',authenticateUser,getAllQuestions)
router.get('/getSingleCourse/:id',authenticateUser,getSingleCourse)
router.post('/submission',authenticateUser,submission)

export default router;