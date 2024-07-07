import React, { useEffect, useState } from 'react'
import './SingleCourse.css'
import { useParams } from 'react-router-dom'
import { studentapiRequest } from '../../../api/axios'

const SingleCourse = () => {
    const {id} = useParams()
    const [course,setCourse] = useState({})

    const fetchSingleCourse = async(id) =>{
        try {
            const response = await studentapiRequest({
              method: 'get',
              url: `/getSingleCourse/${id}`
            });
            console.log(response);
            if (response.courses) {
              setCourse(response.courses)
            }
      
          } catch (error) {
            console.error("Failed to fetch courses:", error);
          }
    }

    useEffect(()=>{
        fetchSingleCourse(id)
    },[])
    return (
        // <div className='singleCourse'>
        //   <div className='basic'>
        //     <div className='heading'>
        //         <h1>Heading</h1>
        //         <h3>Cowhdjshdkhsihdaxkjzhdhkjhdzhd</h3>
        //         <h3>Price : 556</h3>
        //     </div>
        //     <div className='image'>
        //         <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38Eax9BLpLkLdRrO0ZJD3dUaXf4s6efw6zg&s" alt="Image" height={'100%'} />
        //     </div>
        //   </div>
        // </div>
        <div className='container'>
            <div className='details'>
                <h1 className='titles'>
                    {course.title}
                </h1>
                <h1 className='description'>
                    {course.description}
                </h1>

                <div className='price'>
                    <h1>
                        Price: ₹ {course.price}
                    </h1>
                </div>
            </div>

            <div className='thumbnail'>
                <div className='thumbnail-container'>
                    <img src={course.image} alt='Course Thumbnail' />
                </div>


            </div>
        </div>
    )
}

export default SingleCourse
