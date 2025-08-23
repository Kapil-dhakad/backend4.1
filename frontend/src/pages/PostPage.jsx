import axios from 'axios';
import React, { useEffect, useState } from 'react'


const PostPage = () => {

    const [posts, setPosts] = useState([])

    const fetchData = async() => {
       await axios.get('http://localhost:3000/api/posts')
        .then((res)=> {
           setPosts(res.data.post)
        }).catch((err) =>  console.log(err)
        )
    }

    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">All Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-56 w-full bg-gray-100 flex items-center justify-center">
                <img src={post.url} alt="Post" className="object-cover h-full w-full" />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-base font-medium">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default PostPage
