import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
const Home = () => {
  const { formData, setFormData, blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

    const navigate=useNavigate()

    // Fetching data from database
  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");

    const result = await response.data;

    console.log(result);

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    }else{
      setPending(false)
      setBlogList([])
    }
  }

  // Delete Functionality
  async function handleDeleteBlog(getCurrentId) {
    console.log(getCurrentId);

    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if(result?.message ){
      fetchListOfBlogs()
    }
  }

  function handleEdit(getCurrentBlogItem){
    console.log(getCurrentBlogItem);
    navigate("/add-blog",{state:{getCurrentBlogItem}})

  }

  // Showing Data on the home page
  useEffect(() => {
    fetchListOfBlogs();
  }, []);
  return (
    <div className="p-12"> 
      <h1>Blog Lists</h1>
      {pending ? (
        <h1>Loading Blogs Please Wait</h1>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          { blogList && blogList.length ? blogList.map((blogItem) => (
           <div key={blogItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
           <div className="p-6">
             <h2 className="font-semibold text-xl mb-2 text-gray-800">{blogItem.title}</h2>
             <p className="text-gray-700 text-base mb-4">
               {blogItem.description}
             </p>
           </div>
           <div className="px-6 pt-4 pb-2 flex justify-between items-center">
             <FaEdit size={30} className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={()=>handleEdit(blogItem)}/>
             <FaTrash size={30} className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDeleteBlog(blogItem._id)}/>
           </div>
         </div>
         
          )): <h3>No blogs Added</h3>}
        </div>
      )}
    </div>
  );
};

export default Home;
