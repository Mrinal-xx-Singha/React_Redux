import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    blogList,
    setBlogList,
    pending,
    setPending,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  // Fetching data from database
  async function fetchListOfBlogs() {
    setPending(true);
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const result = response.data;

      if (result && result.blogList && result.blogList.length) {
        setBlogList(result.blogList);
        setPending(false);
      } else {
        setPending(false);
        setBlogList([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setPending(false);
      setBlogList([]);
    }
  }

  // Delete Functionality
  async function handleDeleteBlog(getCurrentId) {
    try {
      const response = await axios.delete(`http://localhost:5000/api/blogs/delete/${getCurrentId}`);
      if (response.data?.message) {
        fetchListOfBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }

  function handleEdit(getCurrentBlogItem) {
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-semibold mb-6">Blog Lists</h1>
      {pending ? (
        <h1>Loading Blogs! Please Wait</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-6">
                  <h2 className="font-semibold text-center text-lg mb-2 text-gray-800">{blogItem.title}</h2>
                  <p className="text-gray-700 text-base mb-4">{blogItem.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                  <FaEdit size={24} className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(blogItem)} />
                  <FaTrash size={24} className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDeleteBlog(blogItem._id)} />
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center">No blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
