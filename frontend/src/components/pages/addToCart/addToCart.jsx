import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../redux/addToCart/cart";

const AddToCart = () => {
  const { cartItems, quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({itemId}))
  }
  console.log(cartItems);
  return (
    <>
      <div className="w-full h-screen flex flex-col  mt-10 lg:flex-row gap-[10px]  ">
        <div className=" w-full lg:w-[70%] flex flex-col gap-[10px]">
          {cartItems.length > 0 ? (
            cartItems.map((data, i) => (
              <div className="w-full lg:w-[70%] lg:ml-[60px]  " key={i}>
                <div className="w-full h-auto lg:h-[100px] lg:rounded-3xl shadow-inner shadow-2xl bg-gray-100 flex flex-col lg:flex-row items-center justify-around">
                  <div className="w-[80px] h-[80px] ">
                    <img
                      className="w-full h-[80px] object-center"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <h3>{data.title}</h3>
                  <div className="flex items-center">
                    <button
                      className="w-[30px] h-[20px] rounded-l bg-gray-300 flex items-center justify-center border-[1px]"
                      onClick={() => dispatch(decrementQuantity())}
                    >
                      -
                    </button>
                    <button className="w-[50px] h-[20px]  bg-gray-300 flex items-center justify-center border-[1px]">
                      {quantity}
                    </button>
                    <button
                      className="w-[30px] h-[20px] rounded-r bg-gray-300 flex items-center justify-center border-[1px]"
                      onClick={() => handleIncrement(data._id)}
                    >
                      +
                    </button>
                  </div>
                  <p>{data.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div>no Items added</div>
          )}
        </div>

        <div className="w-full lg:w-[25%] h-[40px] lg:h-[200px] rounded-xl shadow-2xl bg-gray-200">
          fff
        </div>
      </div>
    </>
  );
};

export default AddToCart;
