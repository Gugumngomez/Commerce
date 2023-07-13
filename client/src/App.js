import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home"; 
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";

// starting at the top of a new page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      {/* This is where we create our routes */}
      <Routes >
        {/* this is the route to our home page
        we start from the home page before we scroll to
        other pages */}
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
      </Routes>
      <CartMenu />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
