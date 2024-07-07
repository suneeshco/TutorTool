import React, { useState, useEffect } from 'react'
import './CourseList.css'
import { studentapiRequest } from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([])
  const fetchCourses = async () => {
    try {
      const response = await studentapiRequest({
        method: 'get',
        url: '/getAllCourses'
      });
      console.log(response);
      if (response.courses) {
        setCourse(response.courses)
      }

    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const getSingleCourse = (id) =>{
    navigate(`/courseview/${id}`)
  }
  useEffect(() => {
    fetchCourses();
  }, [])
  return (
    <div>
      {course.length > 0 ? (
        <>
          <h1>Top Courses</h1>
          <div className="grid-containers">
            {course.map((ele, i) => (
              <div key={i} className="card" onClick={() => { getSingleCourse(ele._id) }}>
                <img
                  className="card-img"
                  src={ele.image}
                  alt="Course Thumbnail"
                />
                <div className="card-content">
                  <h4>{ele.title}</h4>
                  <p>{ele.description}</p>
                  <p>₹ {ele.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>No Course Available</h1>
        </>
      )}

    </div>
  )
}

export default CourseList
