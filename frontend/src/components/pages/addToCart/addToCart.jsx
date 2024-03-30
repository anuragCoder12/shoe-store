import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/addToCart/cart";

const AddToCart = () => {
  const { cartItems, quantity } = useSelector((state) => state.cart);
  const { themeColor } = useSelector((state) => state.hero);
  const dispatch = useDispatch();

  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ itemId }));
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col mt-10 lg:flex-row gap-[10px]">
        <div className="w-full lg:w-[70%] flex flex-col gap-[10px]">
          {cartItems.length > 0 ? (
            cartItems.map((data, i) => (
              <div className="w-full lg:w-[70%] lg:ml-[60px]" key={i}>
                <div className="w-full h-auto lg:h-[100px] lg:rounded-3xl shadow-inner shadow-2xl bg-gray-100 flex flex-col lg:flex-row items-center justify-around">
                  <div className="w-[80px] h-[80px]">
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
                    <button className="w-[50px] h-[20px] bg-gray-300 flex items-center justify-center border-[1px]">
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
                  <MdDeleteForever
                    onClick={() => handleDelete(data.id)}
                    className="w-[20px] h-[20px] cursor-pointer text-red-500"
                  />
                </div>
              </div>
            ))
          ) : (
            <div>no Items added</div>
          )}
        </div>

        <div className="w-full lg:w-[25%] h-[60px] lg:h-[200px] rounded-xl shadow-2xl bg-gray-200 sm:flex  items-center lg:flex-col">
          <div className="text-center lg:mt-5 ">
            <h4 className="text-xl font-semibold">Order Total</h4>
            <p className={`text-lg font-semibold text-${themeColor}`}>
              {totalPrice.toFixed(2)}
            </p>
            <button
          // onClick={() => handleClick()}
            className={`w-[75px] h-[30px] lg:w-[100px] lg:h-[35px] bg-${themeColor} rounded-full hover:translate-y-[-5px] transition-transform duration-300 font-semibold ease-in-out `}
          >
            Buy
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
