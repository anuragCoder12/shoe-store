import { useSelector } from "react-redux";

const AboutUs = () => {
    const {themeColor} = useSelector((state) => state.hero)
    return ( 
        <>
        <div className="mt-[750px] lg:mt-[0px] pl-[30px] lg:pl-[120px] flex flex-col lg:flex-row">
            <div className="w-full lg:w-[50%]  ">
                <div className="w-full lg:w-[500px] h-[40px] flex flex-col items-center ">
                <h2 className="text-5xl font-semibold">We Provide You <span className={`text-${themeColor}`}>Super Quality</span>  Shoes</h2>
                <p className="mt-[60px] text-lg text-gray-500">Ensuring premium comfort and style, our meticulousley
                crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and an touch of elegance.</p>
                <p className="lg:mt-[40px] text-lg text-gray-500">Our dedication to detail and excellence ensures your satisfaction</p>
                
                </div>
                <button className={`mt-[350px] w-[120px] h-[50px] rounded-full text-white shadow-lg flex items-center justify-center bg-${themeColor}` }>View Details</button>
            </div>
           <div className=" w-full lg:w-[50%] h-[380px] flex items-center justify-center ">
            <img src="\src\assets\01f8381390bdfd4280e066960dea0044-removebg-preview.png" alt="" />
            </div> 
        </div>
        </>
     );
}
 
export default AboutUs;