import { Router } from 'express';
import { getAllCourse, getSingleCourse } from '../Controllers/studentController.js';

const router = Router()

router.get('/getAllCourses',getAllCourse)
router.get('/getSingleCourse/:id',getSingleCourse)

export default router;