import React, { useEffect, useState } from 'react'

const Async1 = () => {
    const[posts , setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>{
            setPosts(data);
        });
    },[])
  return (
    <div>
        <ul>
        {
            posts.map((post)=>{
                <li key={post.id}>{post.title}</li>
            })
        }
        </ul>
        </div>
        
  )
}

export default Async1