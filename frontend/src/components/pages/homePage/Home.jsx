import AboutUs from "../../aboutUs/AboutUs";
import Hero from "../../hero/Hero";
import Offers from "../../offers/Offers";
import Popular from "../../popularProducts/Popular";

const Home = () => {
    return ( 
        <>
        <Hero/>
        <Popular/>
        <AboutUs/>
        <Offers/>
        </>
     );
}
 
export default Home;