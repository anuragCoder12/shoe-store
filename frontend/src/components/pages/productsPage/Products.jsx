import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../api/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, isLoading, error } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const tokenString = localStorage.getItem("token");
const token = tokenString 

console.log("Token:", token);
  useEffect(() => {
      dispatch(fetchProducts(token));
  }, [dispatch, token]);

  console.log(products);

  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-[90%] h-[90vh]  mt-[10vh] flex flex-col">
          <div className="w-full h-[60px] pt-[70px] flex items-center justify-between p-5">
            <h2 className="lg:text-4xl font-semibold font-serif">
              Choose Your Shoe
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="lg:w-[200px]  w-[150px] h-[30px] rounded-full p-2"
              />
              <img src="\src\assets\details-modal → Details.png" alt="" />
            </div>
          </div>
          <div className="w-full   justify-center mt-[60px] flex flex-wrap gap-[20px] ">
            {products &&
              products.map((data, i) => (
                <div className="w-[230px] h-[250px]  shadow-lg  " key={i}
                onClick={() => navigate(`/product/${data._id}`)}
                >
                  <div className="w-full h-[150px] flex items-center justify-center ">
                    <img className="w-full "
                     src={`http://localhost:8001/images/${data.image}`} alt="" />
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <h4>{data.title}</h4>
                    <p>{data.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
