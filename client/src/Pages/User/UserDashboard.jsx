import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('../../Components/User/Navbar/Navbar'));
const CourseList = React.lazy(() => import('../../Components/User/CourseList/CourseList'));

const UserDashboard = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseList />
      </Suspense>
    </div>
  );
};

export default UserDashboard;

