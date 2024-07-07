import { getCourses, getSingleCourses, getQuestions, saveSubmission } from "../Repository/studentRepository.js";

export const getAllCourse = async (req, res) => {
    try {
        const courses = await getCourses()
        res.send({ courses: courses })
    } catch (error) {
        console.log(error);
    }
}

export const getSingleCourse = async (req, res) => {
    const id = req.params.id;
    try {
        const courseDetail = await getSingleCourses(id)
        res.send({ courses: courseDetail })
    } catch (error) {
        console.log(error);
    }
}


export const getAllQuestions = async (req, res) => {
    try {
        const questions = await getQuestions()
        res.send({ questions: questions })
    } catch (error) {
        console.log(error);
    }
}

export const submission = async (req, res) => {
    try {
        const { answers, courseId, userId } = req.body
        const resp = await saveSubmission(answers, courseId, userId)
        if (resp.ques) {
            res.send({ success: "success" })
        }
    } catch (error) {
        console.log(error);
    }
}