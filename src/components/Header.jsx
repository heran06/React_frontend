import { Link } from "react-router"

const Header = () => {
    return (
       <header className = "w-full bg-red-200 p-4">
        <nav className="flex gap-4 justify-center items-center">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
       </header>
    )

}

export default Header