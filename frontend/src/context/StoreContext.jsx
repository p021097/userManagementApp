import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://jsonplaceholder.typicode.com";
  const [usersData, setUsersData] = useState([]);



// Fetch the users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${url}/users`);

      if (res.status === 200) {
        setUsersData(res.data);
      } else {
        console.error("Unable to fetch users");
      }
    } catch (error) {
      alert(`Error while fetching the users Error : ${error}`);
      console.error(error);
    }
  };


// Delete the user useing user id
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${url}/users/${id}`);
      if(res.status === 200){
        setUsersData((prev) => prev.filter((user)=> user.id !== id))
      alert("User deleted successfully");

      }
    } catch (error) {
      console.error("Error while deleting user : ", error);
    }
  };

// update the user using user id
const updateUser = async (id, updatedUser) => {
  try {
    const res = await axios.put(`${url}/users/${id}`, updatedUser)
    if(res.status === 200){
      setUsersData((prevData) => prevData.map((user) => (user.id === id ? res.data : user)))
    alert("User updated successfully")
    }else{
      console.error('Error while updating the user');
    }
  } catch (error) {
    console.error(`Error while updating user : `, error);
    alert(`Error : ${error}`)
    
  }
}

// Create new user

const createNewUser = async (formData) => {
  try {
    const res = await axios.post(`${url}/users`, formData)
    if(res.status === 200 || res.status === 201){
      setUsersData((prevData)=>[...prevData, res.data])
      alert("User Successfully added")
    }else{
      console.error("Error while creating new user");
    }
  } catch (error) {
    console.error(`Error occured while creating new User Error :  ${error}`);
    
  }
}


// useEffects

  useEffect(() => {
    fetchUsers();
    console.log(usersData);
  }, []);

  const contextValue = {
    usersData,
    setUsersData,
    deleteUser,
    updateUser,
    createNewUser
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
