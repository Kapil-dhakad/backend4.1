import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

const Approuter = () => {
  return (
    <div>
      <nav className="bg-purple-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-white font-bold text-xl">My Gallery</div>
            <div className="flex space-x-4">
              <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-900 transition">Home</a>
              <a href="/post" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-900 transition">Posts</a>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/post' element={<PostPage/>} />
      </Routes>
    </div>
  )
}

export default Approuter
