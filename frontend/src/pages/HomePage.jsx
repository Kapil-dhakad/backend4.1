import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const formData = new FormData();
    formData.append("img", file);
    formData.append("caption", caption);
    try {
      await axios.post('https://sharingphoto.onrender.com/api/posts', formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate('/posts');
      }, 1200);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-2 sm:px-0">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-md mx-auto">
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center font-semibold animate-fade-in">
            Post Uploaded!
          </div>
        )}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-purple-700">Upload a Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">Choose Image</label>
            <input
              onChange={(e)=> setFile(e.target.files[0])}
              type="file"
              id="file"
              name="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
            <input
              type="text"
              id="caption"
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              placeholder="Write a caption..."
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'} text-base sm:text-lg`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage
