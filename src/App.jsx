import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrolls from './pages/student/MyEnrolls'
import Play from './pages/student/Play'
import Loading from './components/student/Loading'
import Instructor from './pages/instructor/instructor'
import Dashboard from './pages/instructor/Dashboard'
import AddCourse from './pages/instructor/AddCourse'
import MyCourses from './pages/instructor/MyCourses'
import StudInvolved from './pages/instructor/StudInvolved'
import Navbar from './components/student/Navbar'

const App=()=>{
  const isInstructorRoute = useMatch('/instructor/*');
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2872656970.

  return(
    <div className='text-default min-h-screen bg-white'> 
      {!isInstructorRoute && <Navbar/>  }
      <Routes>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3345638513. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:528836199. */}
        <Route path='/' element={<Home/>}/>
        <Route path='/CourseList' element={<CoursesList/>}/>
        <Route path='/CourseList/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/MyEnrolls' element={<MyEnrolls/>}/>
        <Route path='/video/:courseId' element={<Play/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>

        <Route path='/instructor' element={<Instructor/>}>
          <Route path='instructor' element={<Dashboard/>}/>
          <Route path='add-courses' element={<AddCourse/>}/>
          <Route path='my-course' element={<MyCourses/>}/>
          <Route path='studInvolve' element={<StudInvolved/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App