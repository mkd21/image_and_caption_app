
import { useEffect, useState } from "react";

import axios from "axios";

function Feed() {

  const [posts , setPost] = useState([]);


  useEffect( () =>{
    axios.get("http://localhost:3000/get-post")
    .then( ({data : posts}) =>{
        console.log(posts);
        setPost(posts);
    })
    .catch( (error) =>{
        console.log("error while fetching the posts",error)
    });
  } ,[] );
  
  return (
    <section className="min-h-screen bg-gray-100 py-6 px-4">
      
      {/* Feed Container */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
        
        {/* Single Post Card */}
        {
            posts.length > 0? (posts.map( (post) =>{
                return <div key={post._id} className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[48%] lg:w-[30%]">
          
                    <img
                        src={post.image}
                        alt="post"
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-4">
                        <p className="text-gray-700 text-sm">{post.caption}</p>
                    </div>

                </div>
            })) 
            :
            ( <p>No post to show</p> )
        }
      </div>

    </section>
  );
}

export default Feed;