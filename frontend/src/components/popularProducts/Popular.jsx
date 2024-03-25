import { useSelector } from "react-redux";

const Popular = () => {
    const {themeColor} = useSelector((state) => state.hero)
    return ( 
        <>
        <div className="w-full h-screen  flex flex-col item-center mt-[480px] md:mt-[150px] pl-[30px] lg:pl-[120px]  ">
      <div className="w-[80%] h-[40px] ">
     <h2 className="text-4xl font-semibold">Our <span className={`text-${themeColor}`}>Popular</span> Products</h2>
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-500">Experience top-notch quality and style with our sought-after</p>
        <p className="text-lg text-gray-500">selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className="mt-10 w-full flex flex-col items-center lg:flex-row lg:gap-[50px]">
        <div className="w-[250px] h-[300px]  ">
          <div className="w-full h-[200px] bg-gray-400 rounded-xl shadow-md"></div>
          <div>
            <h4 className="text-2xl font-semibold font-sans">Name Of Shoe</h4>
            <p className={`text-${themeColor} mt-4 font-semibold text-lg`}>Price</p>
          </div>
        </div>

        <div className="w-[250px] h-[300px]  ">
        <div className="w-full h-[200px] bg-gray-400 rounded-xl shadow-md"></div>
        <div>
            <h4 className="text-2xl font-semibold font-sans">Name Of Shoe</h4>
            <p className={`text-${themeColor} mt-4 font-semibold text-lg`}>Price</p>
          </div>
        </div><div className="w-[250px] h-[300px]  ">
        <div className="w-full h-[200px] bg-gray-400 rounded-xl shadow-md"></div>
        <div>
            <h4 className="text-2xl font-semibold font-sans">Name Of Shoe</h4>
            <p className={`text-${themeColor} mt-4 font-semibold text-lg`}>Price</p>
          </div>
          </div><div className="w-[250px] h-[300px]  ">
          <div className="w-full h-[200px] bg-gray-400 rounded-xl shadow-md"></div>
          <div>
            <h4 className="text-2xl font-semibold font-sans">Name Of Shoe</h4>
            <p className={`text-${themeColor} mt-4 font-semibold text-lg`}>Price</p>
          </div>
          </div>
        </div>
        </div>
        </>
     );
}
 
export default Popular;