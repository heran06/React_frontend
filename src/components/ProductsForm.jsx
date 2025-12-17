import { useState } from "react";
import axios from "axios";


const ProductsForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/products", {
        name: name,
        price: Number(price),
        image: image,
      });

      console.log("Product added:", res.data);

      // Reset fields
      setName("");
      setImage("");
      setPrice("");

      alert("Product Added!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[420px] mx-auto bg-gray-200 p-4 rounded-lg h-[550px] flex flex-col"
    >
      <h2 className="text-xl font-bold text-center mb-4">Add Product</h2>

      <p className="px-2">Name</p>
      <input
        className="w-[380px] p-2 rounded-md border-2 border-gray-300 m-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="px-2">Image URL</p>
      <input
        className="w-[380px] p-2 rounded-md border-2 border-gray-300 m-2"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <p className="px-2">Price</p>
      <input
        className="w-[380px] p-2 rounded-md border-2 border-gray-300 m-2"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        className="mx-auto bg-blue-500 text-white rounded-md p-4 w-[100px] h-[50px]"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default ProductsForm;
