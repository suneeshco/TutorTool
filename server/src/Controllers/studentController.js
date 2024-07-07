import { getCourses, getSingleCourses } from "../Repository/studentRepository.js";

export const getAllCourse = async(req,res) =>{
try {
    const courses = await getCourses()
    res.send({courses:courses})
} catch (error) {
    console.log(error);
}
}

export const getSingleCourse = async(req,res) =>{
    const id = req.params.id;
    try {
        const courseDetail = await getSingleCourses(id)
        console.log(courseDetail);
        res.send({courses:courseDetail})
    } catch (error) {
        console.log(error);
    }
    }