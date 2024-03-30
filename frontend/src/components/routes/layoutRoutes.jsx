import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Home from '../pages/homePage/Home.jsx';
import Footer from '../footer/Footer.jsx';
import Products from '../pages/productsPage/Products.jsx';
import SingleProduct from '../pages/singleProductPage/SingleProduct.jsx';
import AddToCart from '../pages/addToCart/addToCart.jsx';
import SignUp from '../pages/sign-up/SignUp.jsx';
import Headroom from 'react-headroom'
import Login from '../pages/login/Login.jsx';

const Layout = () => {
    return (
        <Router>
            <LayoutContent />
        </Router>
    );
}

const LayoutContent = () => {
    const location = useLocation();

    return (
        <>
        <Headroom>
        {location.pathname !== '/sign-up' && location.pathname !== '/log-in' && <Navbar />}
        </Headroom>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:userId' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/add-to-cart' element={<AddToCart />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/log-in' element={<Login />} />

            </Routes>
            {location.pathname !== '/sign-up' && location.pathname !== '/products' && <Footer />}
        </>
    );
}

export default Layout;
