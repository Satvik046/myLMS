import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CourseSection() {
  const { allCourses } = useContext(AppContext)

  if (!Array.isArray(allCourses)) {
    return <div className="text-center text-gray-500 py-10">Loading courses...</div>
  }

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Explore a wide range of curated courses tailored to boost your skills and knowledge. Find the perfect course to match your goals and start learning today.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to='/course-list'
        onClick={() => scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >
        Explore Courses
      </Link>
    </div>
  )
}

export default CourseSection
