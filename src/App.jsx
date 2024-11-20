import React from "react";
import Navbar from "./Components/Navbar";
import ImageCarousel from "./Components/ImageCarousel";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          <h1>Given Error Carousel Images</h1>
          <h1>New vercel project</h1>
          <h2>Api Working</h2>
          <Navbar />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
