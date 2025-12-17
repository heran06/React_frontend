import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const Pagination = () => {
    {/*const {currentPage,setcurrentPage} = props */}
    const {currentPage,setcurrentPage} = useContext(GlobalContext)   
    const handlePrev = () =>{
        setcurrentPage(currentPage-1)
        localStorage.setItem('page',currentPage-1)
    }
    const handleNext = () =>{
        setcurrentPage(currentPage+1)
        localStorage.setItem('page',currentPage+1)
    }

    return (
        <div className = "w-[300px] mx-auto bg-yellow-50 m-4 mx-auto p-4 rounded-md shadow-lg flex items-center justify-center">
            <button className = "bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrev}>{"<"}</button>
            <div className = "text-xl bg-yellow-200 rounded-md px-4 py-2">{currentPage}</div>
            <button className = "bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>{">"}</button>
        </div>
    )

}
export default Pagination;