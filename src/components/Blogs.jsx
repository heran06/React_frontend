
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Blogs=()=>{

    const[blogs,setBlogs]=useState([])
        
    
        useEffect(()=>{
            const fetchData=async()=>{
                const response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const data=await response.json()
                console.log(data)
                setBlogs(data)
            }
            fetchData()
        },[])
    
    return(
        <div className=" w-full p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Blogs List</h1>
            <div className="flex flex-wrap gap-4 justify-center">
            {blogs.map((blog)=>{
                return(
                    <Link to={`/blogs/${blog.id}`}>
                         <div className="border-2 p-4 w-[300px] h-[300px] rounded-md shadow overflow-hidden ">
                            <p className="text-md"> ID : {blog.id}</p>
                            <p className="text-2xl font-bold">{blog.title}</p>
                             <p className="text-l">{blog.body}</p>
                         </div>
                    </Link>
                   
                )
            })}
            </div>
        </div>
    )
}
export default Blogs;