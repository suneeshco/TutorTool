
import Course from '../Models/courseModel.js'



export const getCourses = async() =>{
try {

    let res = await Course.find({})
    return res
} catch (error) {
    console.log(error);
}
}

export const getSingleCourses = async(id) =>{
    try {
    
        let res = await Course.findOne({_id:id})
        return res
    } catch (error) {
        console.log(error);
    }
    }