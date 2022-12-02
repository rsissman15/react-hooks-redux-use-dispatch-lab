import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  // const [name, setName] = useState("");
  // const [location, setLocation] = useState("");


  const [formData,setFormData]=useState({
    name:'',
    location:''
  })

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const dispatch=useDispatch()

  



  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }

  // function handleLocationChange(event) {
  //   setLocation(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addRestaurant(formData))
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleInputChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleInputChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
