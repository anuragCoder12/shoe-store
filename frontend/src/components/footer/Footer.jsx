const Footer = () => {
    return ( 
        <>
        <div className="hidden sm:flex w-full h-[400px] bg-black z-20  justify-around pt-10">
            <div className="flex flex-col w-[300px] ">
                <h2 className="text-white text-3xl font-semibold">logo</h2>
                <p className=" mt-4 text-lg text-gray-400">Get shoes ready for the new term at your nearest store
                . Find your perfect size in store. Get rewards</p>
            </div>
            <div className="flex flex-col w-[300px] ">
            <h2 className="text-white text-3xl font-semibold">Products</h2> 
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Air Force 1</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Air Max 1</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Air Jordan 1</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Air Force 2</p>
            </div>
            <div className="flex flex-col w-[300px]">
            <h2 className="text-white text-3xl font-semibold">Help</h2>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">About Us</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">FAQ</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">How It Works</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Privacy Policy</p>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">Payment Policy</p>
            </div>
            <div className="flex flex-col w-[300px]">
            <h2 className="text-white text-3xl font-semibold">Get In Touch</h2>
            <p className=" mt-3 text-lg text-gray-400 cursor-pointer">xyz@gmail.com</p>   
            </div>

        </div>
        </>
     );
}
 
export default Footer;