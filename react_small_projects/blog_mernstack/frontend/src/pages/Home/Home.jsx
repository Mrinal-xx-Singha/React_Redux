import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
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
    <div className={classes.wrapper}>
      <h1>Blog Lists</h1>
      {pending ? (
        <h1>Loading Blogs Please Wait</h1>
      ) : (
        <div className={classes.blogList}>
          { blogList && blogList.length ? blogList.map((blogItem) => (
            <div key={blogItem.id}>
              <p>{blogItem.title}</p>
              <p>{blogItem.description}</p>
              <FaEdit size={30}
              onClick={()=>handleEdit(blogItem)}
              
              />
              <FaTrash
                onClick={() => handleDeleteBlog(blogItem._id)}
                size={30}
              />
            </div>
          )): <h3>No blogs Added</h3>}
        </div>
      )}
    </div>
  );
};

export default Home;
