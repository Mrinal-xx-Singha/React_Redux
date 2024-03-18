import { useState } from "react";

const initialState = {
  name: "",
  city: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialState);


  function handleNameChange(e){
    setFormData({
      ...formData,
      name:e.target.value
    })
  }
  
  function handleCityChange(e){
    setFormData({
      ...formData,
      city : e.target.value
    })
  }
  
  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={handleNameChange}/>
      <select onChange={handleCityChange} id="">
        <option value={""} id="">
          Select City
        </option>
        <option value={"bangalore"} id="bangalore">
          Bangalore
        </option>
        <option value={"mumbai"} id="mumbai">
          Mumbai
        </option>
      </select>
      <div>
        Name is {formData.name}
        City is {formData.city}
      </div>
    </div>
  );
};

export default App;
