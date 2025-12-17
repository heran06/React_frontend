
const Navbar = () => {
  return (
    <div className="bg-amber-50 p-1  flex justify-between hidden sm:flex border-2 border-gray-300 rounded-md m-2 shadow-lg w-full mb-4">
      <div className="font-bold italic text-2xl  p-2">
        Products
      </div>

      <div className="flex justify-center gap-10 text-xl  p-2">
        <div className="item hover:text-neutral-600">Products</div>
        <div className="item hover:text-neutral-600">Orders</div>
        <div className="item hover:text-neutral-600">Cart</div>
        <div className="item hover:text-neutral-600">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
