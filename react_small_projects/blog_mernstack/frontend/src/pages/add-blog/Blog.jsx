import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AddNewBlog = () => {
  const { formData, setFormData, setIsEdit, isEdit } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDatabase() {
    if (isEdit) {
      const response = await axios.put(
        `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,
        {
          title: formData.title,
          description: formData.description,
        }
      );
      const result = await response.data;
      if (result) {
        setIsEdit(false);
        setFormData({
          title: "",
          description: "",
        });
        navigate("/");
      }
    } else {
      // Add new blog logic here
      await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

      // Reset edit state and form data
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    if (location.state && location.state.getCurrentBlogItem) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    } else {
      setIsEdit(false); // Reset edit state if no current blog item
      setFormData({
        title: "",
        description: "",
      });
    }
  }, [location]);

  return (
    <div className="p-4 md:p-12 flex justify-center items-center flex-col bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-5xl mb-8 font-bold text-gray-800 text-center">
        {isEdit ? "Edit a Blog" : "Add a Blog"}
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <input
          className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all outline-none text-lg"
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all outline-none text-lg"
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          rows="5"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-150 ease-in-out"
          onClick={handleSaveBlogToDatabase}
        >
          {isEdit ? "Update Blog" : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

export default AddNewBlog;
