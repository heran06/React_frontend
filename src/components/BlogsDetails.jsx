
import{useEffect,useState,useContext} from "react"
import { useParams } from "react-router"

const BlogDetails=()=>{
     const{id}=useParams()  
    const[blogData,setBlogData]=useState({})
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data=await response.json()
            setLoading(false)
            console.log(data)
            setBlogData(data)
        }
        fetchData()
    },[])
    return(
        <div className="w-[1500px] h-[550px] mx-auto  flex flex-col items-center justify-center mt-4 "> 
            <h1 className="text-xl mb-2 mt-2 font-bold">Blog Details</h1>
           
                 <p className="text-2xl mt-2 mb-2">{blogData.title}</p>
                <p className="text-xl mt-2 mb-2">{blogData.body}</p>
    
           
        </div>

    )
}
export default BlogDetails;