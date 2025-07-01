import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar({data}) {
    const navigate = useNavigate()
    const [input, setInput] = useState(data?data:'')
    const searchHandle=(e)=>{
        e.preventDefault()  
        navigate('/course-list/'+input)
    }

    return (
        <form onSubmit={searchHandle} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded full'>
            <img src={assets.search_icon} className='md:w-auto w-10 px-3 '/>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='w-full h-full outline-none text-gray-500/80' placeholder='search for courses'/>
            <button type="submit" className='bg-blue-600 text-white md:px-10 px-7 md:py-3 py-2 mx-1 rounded'>SEARCH</button>
        </form>
  )
}

export default SearchBar