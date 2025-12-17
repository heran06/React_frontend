import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import StudentCard from "./components/StudentCard";
import UserDetails from "./components/UserDetails";
import {useState} from "react"
import { GlobalProvider } from "./contexts/GlobalContext";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/ProductsForm";
import Header from "./components/Header";
import Blogs from "./components/Blogs";


const App = () => {
  {/*const [currentPage, setcurrentPage] = useState(() => {
    const page = localStorage.getItem('page')
    return page ? parseInt(page) : 1;
  });*/}

  let firstName ="Ben";
  let lastName ="Tennison";
  let age=27;
  
   const products = [
        {
            id:1,
            name:"Product1",
            price:100,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8Ne4j_5gRNNikzu_KZRIyzSihAQ74KAbiQ&s"
        },

        {
            id:2,
            name:"Product2",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2nmWoa-66Yo5xylQwIiAxtvMrK2pB2l4CA&s "
        }
    ];

  return (
    <>
      <h1 className="text-3xl mb-2 font-bold">Student Details</h1>
      <StudentCard fname = {firstName} lname = {lastName} age = {age}/>
      {/*StudentCard({fname:firstName, lname:lastName})*/}
      <Counter/>
      {/*<UserDetails currentPage={currentPage}/>
      <Footer currentPage={currentPage} setcurrentPage={setcurrentPage}/>*/}
      <GlobalProvider>
         <UserDetails/>
         <Footer/>
      </GlobalProvider>
      <LoginForm/> 
      <div className="bg-yellow-50 flex flex-col justify-center items-center mx-auto w-[1100px]">
      <Navbar/>
      <ProductList products={products}/>
      <ProductsForm/>
      </div>
      
      
    </>
  )
}
export default App;