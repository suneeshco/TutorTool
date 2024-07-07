import React from 'react'
import './SingleCourse.css'

const SingleCourse = () => {
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
                    hshisrsdurxjhdjhd
                </h1>
                <h1 className='description'>
                    xjhjdhfcoxjfkdxjcvlk
                </h1>

                <div className='price'>
                    <h1>
                        Price: ₹ 64656
                    </h1>
                </div>
            </div>

            <div className='thumbnail'>
                <div className='thumbnail-container'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfqqkpONm61Hc1kzQjjRACDZ16B0bfJnaJg&s' alt='Course Thumbnail' />
                </div>


            </div>
        </div>
    )
}

export default SingleCourse
