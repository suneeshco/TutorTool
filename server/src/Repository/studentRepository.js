
import Course from '../Models/courseModel.js'
import Question from '../Models/QuestionModel.js'
import Submission from '../Models/submissionModel.js'



export const getCourses = async () => {
    try {

        let res = await Course.find({})
        return res
    } catch (error) {
        console.log(error);
    }
}

export const getSingleCourses = async (id) => {
    try {

        let res = await Course.findOne({ _id: id })
        return res
    } catch (error) {
        console.log(error);
    }
}

export const getQuestions = async () => {
    try {

        let res = await Question.find({})
        return res
    } catch (error) {
        console.log(error);
    }
}

export const saveSubmission = async (answers, courseId, userId) => {
    try {
        const update = {
            answers,
            courseId,
            userId
        };
        const options = {
            new: true,
            upsert: true,
        };
        const submission = await Submission.findOneAndUpdate({ courseId, userId }, update, options);
        return { ques: submission }
    } catch (error) {
        console.log(error);
    }
}      