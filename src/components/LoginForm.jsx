import axios from "axios"
import {useState,useRef} from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const LoginForm=()=>{

    const[userName,setUserName]=useState('')
    const navigate = useNavigate()

    const handleNameChange=(e)=>{
        setUserName(e.target.value)
    }
    console.log(userName)

    // const[password,setPassword]=useState('');
    // const handlePasswordChange=(e)=>{
    //     setPassword(e.target.value)
    // }

    const passwordRef=useRef('')
    const handlePasswordChange=(e)=>{
        console.log(password)
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        //console.log(userName,password)
        console.log(userName,passwordRef.current.value)
        // if(userName === 'abc' && passwordRef.current.value === '123'){
        //     toast.success('Login Successful')
        //     sessionStorage.setItem('isLoggedIn',true)
        //     navigate('/admin')
        // }else{
        //     toast.error('Login failed')
        // }

        const { data } = await axios.post('http://localhost:3000/auth/login', {
            email : userName,
            password: passwordRef.current.value
        })
        console.log("response => ",data)
        toast.success(data.message)
        sessionStorage.setItem('token',data.token)
        sessionStorage.setItem('isLoggedIn',true)
        navigate('/products')
    }


    return(
       <form className="w-[300px] mx-auto bg-rose-50 m-4 mx-auto p-4 rounded-lg h-[250px] flex flex-col ">
            <h2 className="text-xl font-bold items-center justify-center flex flex-col">LOGIN</h2>
            <input 
                className="w-full p-2 rounded-md border-2 border-gray-300 m-2" 
                type="text" placeholder="UserName" 
                value={userName} 
                onChange={handleNameChange}>
            </input>

            <input 
                className="w-full p-2 rounded-md border-2 border-gray-300 m-2" 
                type="password" placeholder="Password" 
                // value={password} 
                // onChange={handlePasswordChange}
                ref={passwordRef}
                >
            </input>
            
           <button
                className="mx-auto bg-blue-500 text-white rounded-md p-4 w-[100px]" 
                type="submit"
                onClick={handleSubmit}
                >Login
            </button>
       </form>
    )
}
export default LoginForm