import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Blogs from './components/Blogs.jsx'
import AdminPage from './components/AdminPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import BlogDetails from './components/BlogsDetails.jsx'
import {ToastContainer} from "react-toastify"
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
createRoot(document.getElementById('root')).render(
    <>
    <ToastContainer/>
    <BrowserRouter>
         <Routes>
            <Route element = {<HomeLayout/>}>
                <Route path = '/' element = {<App/>} />
                <Route path='/products'>
                    <Route index element={<ProductList products = {products} />}/>
                    <Route path = ':id' element={<ProductDetails/>}/>
                </Route>
                <Route path='/blogs'>
                    <Route index element={<Blogs/>}/>
                    <Route path = ':id' element={<BlogDetails/>}/>
                </Route>               
                 <Route path = '/about' element = {<About/>} />
                <Route path = '/contact' element = {<Contact/>} /> 
                
            </Route>
            <Route path = '/login' element = {<LoginForm/>}/>
            <Route path = '/admin' element={
                <ProtectedRoute>
                <AdminPage/>
                </ProtectedRoute>}/>
         </Routes>
        
    </BrowserRouter>
    </>
)
