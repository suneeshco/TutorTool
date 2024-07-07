import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import SingleCourse from '../../Components/User/SingleCourse/SingleCourse'
import Questions from '../../Components/User/Questions/Questions'

const CourseView = () => {
  return (
    <div>
      <Navbar/>
      <SingleCourse/>
      <Questions/>
    </div>
  )
}

export default CourseView
