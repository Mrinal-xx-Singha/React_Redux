import { useContext, useEffect } from 'react';
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios"
import {useNavigate,useLocation} from "react-router-dom"

const AddNewBlog = () => {
  const { formData, setFormData,setIsEdit,isEdit } = useContext(GlobalContext);
  const navigate =useNavigate()
  const location =useLocation()

  console.log(formData)


  async function handleSaveBlogToDatabase(){
    const response = isEdit ? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{
      title: formData.title,
      description:formData.description
    }) 
    
    : await axios.post('http://localhost:5000/api/blogs/add',{
      title: formData.title,
      description:formData.description
    })

    const result = await response.data
    console.log(result);

    if(result){
      setIsEdit(false)
      setFormData({
        title:'',
        description:''
      });
      navigate('/')
    }


  }
  useEffect(()=>{
console.log(location);

if(location.state){
  const {getCurrentBlogItem} =location.state;
  setIsEdit(true)
  setFormData({
    title:getCurrentBlogItem.title,
    description:getCurrentBlogItem.description
  })
}

  },[location])

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit a Blog" : "Add a Blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter Blog title"
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
          name="description"
          placeholder="Enter blog description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <button
        onClick={handleSaveBlogToDatabase}
        >{isEdit ? "Edit Blog" : "Add Blog"}</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
