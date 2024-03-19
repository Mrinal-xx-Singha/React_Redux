import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AddNewBlog from "./pages/add-blog/Blog";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
};

export default App;
