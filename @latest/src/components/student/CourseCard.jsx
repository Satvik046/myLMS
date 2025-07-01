import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {

  const {currency}=useContext(AppContext)

  return (
    <div>
      <img src={course.courseThumbnail} alt={course.courseName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.courseName}</h3>
        <p className="text-sm text-gray-500 mb-2">By {course.educator.name}</p>
        
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-medium text-yellow-600">4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={assets.star} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <p className="text-sm text-gray-400">(22)</p>
        </div>
        <p className="text-blue-600 font-bold">{currency}{(course.coursePrice-course.discount*course.coursePrice/100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCard
