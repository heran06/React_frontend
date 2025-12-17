import { useEffect,useState } from "react";

const Counter = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2]= useState(0)

    useEffect(() => {
        console.log('Inside SideEffect')
    },[count1])

    const increment1 = () =>{
        console.log("Increment button clicked")
        setCount1(count1+1);
    };
    const increment2 = () =>{
        console.log("Increment button clicked")
        setCount2(count2+1);
    };

    const decrement1 = () =>{
        console.log("Decrement button clicked")
        setCount1(count1-1)
    }

    const decrement2 = () =>{
        console.log("Decrement button clicked")
        setCount2(count2-1)
    } 

    return (
        <div className = "w-[300px] m-4 mx-auto bg-yellow-50 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h1 className = "text-xl mb-2">Counter</h1>
            <p className ="text-4xl mb-2">{count1}</p>
            <p className ="text-4xl mb-2">{count2}</p>
            <div className ="flex gap-2">
                <button className= "bg-red-400 text-white px-4 py-2 rounded-md" onClick={decrement1}>Decrement1</button>
                <button className= "bg-blue-400 text-white px-4 py-2 rounded-md" onClick={increment1}>Increment1</button>
            </div>
            <div className ="flex gap-2 m-1">
                <button className= "bg-red-400 text-white px-4 py-2 rounded-md" onClick={decrement2}>Decrement2</button>
                <button className= "bg-blue-400 text-white px-4 py-2 rounded-md" onClick={increment2}>Increment2</button>
            </div>
        </div>
    )
}
export default Counter;