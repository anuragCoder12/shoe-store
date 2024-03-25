import { useDispatch, useSelector } from "react-redux";
import { toggleThemeColor } from "../../redux/hero/hero";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const cardItems = [
    {
      id: 0,
      image: "src/assets/pngwing.com-39.png",
      color: "green-500",
      bgColor: "green-400",
    },
    {
      id: 1,
      image: "src/assets/download-removebg-preview.png",
      color: "red-500",
      bgColor: "red-400",
    },
    {
      id: 2,
      image: "src/assets/orangeshoes-removebg-preview.png",
      color: "orange-500",
      bgColor: "orange-400",
    },
  ];
  const { themeColor, bannerImage, bgColor } = useSelector(
    (state) => state.hero
  );
  
  const dispatch = useDispatch();
  const handleColorChange = (color, image, background) => {
    dispatch(
      toggleThemeColor({
        themeColor: color,
        bannerImage: image,
        bgColor: background,
      })
    );
  };
  console.log(themeColor
    );
    const navigate = useNavigate()
  return (
    <>
      <div className="relative w-full h-screen  flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] h-screen bg-white lg:flex-col items-center mt-[100px] lg:mt-[150px] lg:pl-[100px]">
          <p
            className={`text-xl text-${themeColor} font-medium ml-[80px] lg:ml-[200px]`}
          >
            Our Summer Collections
          </p>
          <div className="absolute mt-[50px] w-full lg:w-[700px] h-[50px] lg:h-[100px] bg-white lg:left-[200px] ">
            <h1 className="text-4xl lg:text-7xl font-bold flex items-center justify-center">
              The New Arrival
            </h1>
          </div>
          <div className=" mt-[120px] lg:mt-[160px] flex-col flex items-center">
            <h1 className="text-4xl lg:text-7xl font-bold flex items-center justify-center">
              <span className={`text-${themeColor}`}>Nike</span>
              <span className="ml-7">Shoes</span>
            </h1>
            <div className="mt-6">
              <p className="text-lg text-gray-500">
                Discover stylish Nike arrivals, quality
              </p>
              <p className="text-lg text-gray-500">
                comfort, and innovation for your activity life.
              </p>
            </div>
          </div>
          <div className="mt-[30px] group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
            <div
            onClick={() => navigate('/products')}
              className={`shadow-md flex items-center group-hover:gap-2 bg-${themeColor} p-3 rounded-full cursor-pointer duration-300`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-zinc-600"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                ></path>
              </svg>
              <span className="text-[0px] group-hover:text-sm duration-300">
                Shop Now
              </span>
            </div>
          </div>
          <div>
           
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-screen bg-white">
          <div
            className={` w-full lg:w-[90%] h-[700px] lg:h-screen lg:bg-${bgColor} flex flex-col items-center justify-center`}
          >
            <div className="w-full lg:h-[500px] flex items-center justify-center ">
              <img
                src={bannerImage}
                className="w-[200px]  lg:w-[600px]  "
                alt=""
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
              {cardItems.map((data, i) => (
                <div
                  onClick={() =>
                    handleColorChange(data.color, data.image, data.bgColor)
                  }
                  className={`w-[160px] h-[140px] bg-${themeColor} cursor-pointer rounded-xl flex items-center justify-center shadow-md `}
                  key={i}
                >
                  <img src={data.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
