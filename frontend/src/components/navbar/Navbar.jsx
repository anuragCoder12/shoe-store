import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navbar/navbar";
import cart from "../../assets/Link → SVG.png";
import { useNavigate } from "react-router-dom";
// import { clearUsers } from "../../redux/userAuth/userAuth";
// import { useEffect } from "react";
const Navbar = () => {
  const { navShow } = useSelector((state) => state.navbar);
  const { themeColor } = useSelector((state) => state.hero);
  const { cartCount } = useSelector((state) => state.cart);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     dispatch(clearUsers());
  //   }
  // }, [dispatch]);
  // console.log(users)

  // const handleClick = () => {
  //   if(users){
  //     localStorage.clear()
  //     navigate('/')
  //   }else{
  //     navigate('/log-in')
  //   }
  // }
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
     {
      title: "Products",
      path: `/products`,
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
  ].filter(Boolean);
 
  return (
    <>
      <div className="  w-full h-[89.08px] bg-white shadow-lg flex items-center justify-between lg:justify-around z-10">
        <button
          onClick={() => dispatch(toggleNavbar())}
          className="block lg:hidden z-30 "
        >
          {navShow ? <X /> : <Menu />}
        </button>
        {navShow && (
          <div className=" absolute left-0 top-0 w-[300px] h-[100vh] bg-white bg-opacity-85 mt-[90px]  ">
            <div className="w-full h-[50vh]  flex flex-col items-center justify-around ">
              {navLinks.map((data, i) => (
                <p
                  onClick={() => navigate(data.path)}
                  className="text-2xl font-bold  "
                  key={i}
                >
                  {data.title}
                </p>
              ))}
            </div>
          </div>
        )}
        <p>logo</p>
        <div className="w-[460px] h-[44.08px]  justify-evenly hidden items-center lg:flex">
          {navLinks.map((data, i) => (
            <p
              onClick={() => navigate(data.path)}
              className={`text-lg text-gray-500 cursor-pointer  hover:text-${themeColor} `}
              key={i}
            >
              {data.title}
            </p>
          ))}
        </div>
        <div className="flex  items-center">
          <img
            src={cart}
            alt="cart"
            className="cursor-pointer"
            onClick={() => navigate("/add-to-cart")}
          />
          {cartCount > 0 && <div
            className={`relative top-[-10px] left-[-20px] w-[17px] h-[17px] rounded-full bg-${themeColor} flex items-center justify-center`}
          >
            {cartCount}
          </div>}
          
          <button
          // onClick={() => handleClick()}
            className={`w-[75px] h-[30px] lg:w-[100px] lg:h-[35px] bg-${themeColor} rounded-full hover:translate-y-[-5px] transition-transform duration-300 font-semibold ease-in-out `}
          >
            {users ? "log out" : "log in"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
