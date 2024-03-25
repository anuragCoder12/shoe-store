import { useSelector } from "react-redux";


const Offers = () => {
    const {themeColor} = useSelector((state) => state.hero)
    return ( 
        <>
        <div className="w-full p-[30px] lg:p-[120px] h-screen flex flex-col lg:flex-row items-center ">
            <div className="w-full lg:w-[45%] flex flex-col ">
            <div className="flex gap-[10px] ">
             <div className=" w-[50%] lg:w-[40%] h-[280px] bg-gray-400 rounded-lg " >
                <img src="\src\assets\705392062_310_430-removebg-preview.png" className="h-[280px]" alt="" />
             </div>
             <div className="w-[50%] lg:w-[40%] h-[280px] bg-gray-400 rounded-lg " >
             <img src="\src\assets\412981094-removebgleg1-preview.png" className="h-[280px]" alt="" />
             </div>
             
            </div>
            <div className="w-full lg:w-[85%] h-[182px] bg-gray-400 rounded-lg mt-[10px] flex ">
            <img src="\src\assets\imagesleg3-removebg-preview.png" alt="" />
            <div className="hidden sm:flex w-[200px] h-[200px] bg-white rounded-full relative top-[-80px]  lg:left-[100px]  items-center justify-center">
    <div className="w-[150px] h-[150px] rounded-full bg-black flex flex-col items-center justify-center relative">
        <p className="text-white text-3xl font-semibold font-serif">30%</p>
        <p className="text-white text-3xl font-semibold font-serif">OFF</p>
    </div>
</div>
            </div>
            </div>
            {/* offer portion */}
            <div className="w-full lg:w-[40%] h-[] flex flex-col  pl-[30px] ">
                <h3 className="text-5xl font-semibold"><span className={`text-${themeColor}`}>Special</span> Offers</h3>
                <p className="text-lg text-gray-500 mt-8">
                    Embark on shopping journey that redefines your experience with unbeatable deals. From premier sections to incredible savings,
                    We offer unparalleled values that sets us apart.
                </p>
                <p className="text-lg text-gray-500 mt-6">
                    Navigate a realm of possibilities designed to fulfill your unique dedsires, surpassing the lotiest expectations. Your journey with us nothing short of exceptional.
                </p>
                <div className="flex gap-[20px]">
                <button className={`mt-6 w-[120px] h-[50px] rounded-full text-white shadow-lg flex items-center justify-center bg-${themeColor}` }>Shop Now</button>
                <button className={`mt-6 w-[120px] h-[50px] border-[1px] rounded-full text-black shadow-lg flex items-center justify-center bg-white hover:bg-${themeColor} hover:text-white` }>View Details</button>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Offers;