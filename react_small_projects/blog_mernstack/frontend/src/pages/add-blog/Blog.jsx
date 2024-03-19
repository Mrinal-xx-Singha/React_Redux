import { useContext } from 'react';
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const AddNewBlog = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  const navigate =useNavigate()

  console.log(formData)


  async function handleSaveBlogToDatabase(){
    const response = await axios.post('http://localhost:5000/api/blogs/add',{
      title: formData.title,
      description:formData.description
    })

    const result = await response.data
    console.log(result);

    if(result){
      setFormData({
        title:'',
        description:''
      });
      navigate('/')
    }


  }

  return (
    <div className={classes.wrapper}>
      <h1>Add A Blog</h1>
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
        >Add New Blog</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
