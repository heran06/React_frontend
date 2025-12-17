import { useParams } from "react-router"

const ProductDetails = () => {
      const {id} =useParams()
    return(
      
        <div className="mt-2">Product id : {id} </div>
    )
}
export default ProductDetails