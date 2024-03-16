import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/index.jsx";
import Favourites from "./pages/favourites/index.jsx";
import Details from "./pages/details/index.jsx";

const App = () => {
  return (
    <div>
      <div className="min-h-screen  bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
