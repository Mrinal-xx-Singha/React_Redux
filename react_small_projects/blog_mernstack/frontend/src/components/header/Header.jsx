import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center p-4 lg:p-8 text-3xl lg:text-4xl justify-between container mx-auto">
      <h3 className="font-serif font-medium m-0 text-gray-800 hover:text-gray-600 transition-colors duration-200 ease-in-out">
        Blog-App
      </h3>
      <ul className="flex items-center gap-3 lg:gap-5 list-none">
        <Link to={"/"}>
          <li className="font-semibold text-xl lg:text-3xl text-gray-800 hover:text-gray-600 transition-colors duration-200 ease-in-out">
            Home
          </li>
        </Link>
        <Link to={"/add-blog"}>
          <li className="py-2 lg:py-3 px-4 lg:px-6 bg-green-600 rounded-md text-center text-xl lg:text-2xl text-gray-100 font-semibold hover:bg-green-700 transition-colors duration-200 ease-in-out cursor-pointer">
            Add+
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
