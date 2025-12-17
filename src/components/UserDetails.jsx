import { useContext, useEffect, useState } from "react"
import GlobalContext from "../contexts/GlobalContext"

const UserDetails = () => {
    {/*const {currentPage} = props*/}
    const {currentPage} = useContext(GlobalContext)
    const [userData,setUserData] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`)
            const data = await response.json()
            setLoading(false)
            console.log(data)
            setUserData(data)
        }
        fetchData()
    }, [currentPage])
    return (
        <div className ="w-[300px] mx-auto bg-lime-200 flex flex-col items-center justify-center">
            <h1 className ="text-xl mb-2 mt-2 font-bold">User Details</h1>
            {loading ?
            (<p className ="text-xl mb-2 mt-2">Loading..</p>)
            :
            (<p className ="text-2xl mb-2 mt-2">{userData.name}</p>)}

            
        </div>
    )
}

export default UserDetails;