import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('../../Components/User/Navbar/Navbar'));
const SingleCourse = React.lazy(() => import('../../Components/User/SingleCourse/SingleCourse'));
const Questions = React.lazy(() => import('../../Components/User/Questions/Questions'));

const CourseView = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading Single Course...</div>}>
        <SingleCourse />
      </Suspense>
      <Suspense fallback={<div>Loading Questions...</div>}>
        <Questions />
      </Suspense>
    </div>
  );
};

export default CourseView;

