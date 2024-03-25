import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../api/products";
import { useParams } from "react-router-dom";
import { addCartItem } from "../../../redux/addToCart/cart";

const SingleProduct = () => {
    const {products} = useSelector((state) => state.api)
    const {themeColor} = useSelector((state) => state.hero)
    const {cartItems} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    const {id} = useParams()
    //add to cart
    const cartHandler = (productName, image, price) =>{
      dispatch(addCartItem({ productName, image, price }))
    }

     const singleProduct = products.find((product) => product._id === id)
console.log(cartItems)
    return ( 
        <>
        <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-[55%] w-full h-[100vh]  flex flex-col items-center justify-center  ">
          <div className="lg:w-[450px] w-[70%] h-[400px]  lg:h-[600px] bg-white shadow-md cursor-pointer">
            {singleProduct ? (
              <img
                src={`http://localhost:8001/images/${singleProduct.image}`}
                alt=""
                className="w-full h-[600px] object-contain"
              />
            ) : (
              // Render a loading message or some other fallback if singleProduct is not found
              <div>Loading...</div>
            )}
          </div>
        </div>
        {singleProduct ? (
          <div className="lg:w-[500px] w-full flex flex-col text-left gap-[20px] p-[30px]">
            <h1 className="text-5xl text-black font-semibold ">{singleProduct.title}</h1>
            <p className={`text-lg text-${themeColor} font-semibold`}>Rs. {singleProduct.price}</p>
            <div>
            </div>
            <button
              onClick={() => cartHandler(singleProduct.title,`http://localhost:8001/images/${singleProduct.image}`,singleProduct.price)}
              className={`lg:w-[500px] w-full h-[60px] border-[2px] shadow-lg border-${themeColor} rounded-full `}
            >
              Add to cart
            </button>

            <button className={`lg:w-[500px] w-full h-[60px] border-[2px] shadow-lg  bg-${themeColor} text-white rounded-full`}>
              Buy now
            </button>
            <p className="text-lg text-gray-400">{singleProduct.details}</p>
          </div>
        ) : (
          // Render a loading message or some other fallback if singleProduct is not found
          <div>Loading...</div>
        )}
      </div>
        </>
     );
}
 
export default SingleProduct;