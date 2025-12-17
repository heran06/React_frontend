import { Link } from "react-router";

const ProductCard = (props) => {
  const {name,price,image,id} = props
  return (
    <Link to = {`/products/${id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4 w-64">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-3">Price: ${price}</p>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;