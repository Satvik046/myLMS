import { useState } from 'react'
import { Routes,Route, useMatch } from 'react-router-dom'
import './App.css'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import Enrolls from './pages/student/Enrolls'
import Video from './pages/student/Video'
import Loading from './components/student/Loading'
import Instructor from './pages/instructor/Instructor'
import Dashboard from './pages/instructor/Dashboard'
import AddCourse from './pages/instructor/AddCourse'
import MyCourses from './pages/instructor/MyCourses'
import StudentsEnroll from './pages/instructor/studentsEnroll'
import Navbar from './components/student/Navbar'

function App() {
  const isInstructorRoute=useMatch('/instructor/*');

  return (
    <>
     <div className='text-default min-h-screen bg-white'>
      {!isInstructorRoute && <Navbar/>}
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/courseList' element={<CourseList />}/>
        <Route path='/course/:id' element={<CourseDetails />}/>
        <Route path='/myEnrolls' element={<Enrolls />}/>
        <Route path='/video/:courseId' element={<Video />}/>
        <Route path='/loading/:path' element={<Loading />}/>

        <Route path='/instructor' element={<Instructor />}>
          <Route path='instructor' element={<Dashboard />}/>
          <Route path='add-course' element={<AddCourse />}/>
          <Route path=' ' element={<MyCourses />}/>
          <Route path='students-enrolled' element={<StudentsEnroll />}/>
        </Route>
      </Routes>
     </div>
    </>
  )
}

export default App
 