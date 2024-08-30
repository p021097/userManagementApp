import { useContext, useEffect, useState } from "react";
import "./Edit.css";
import { StoreContext } from "../../context/StoreContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { usersData,updateUser } = useContext(StoreContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = usersData.find((user) => user.id === parseInt(id));
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [id, usersData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateUser);
    
    if (user) {
      updateUser(parseInt(id), user);
      navigate("/");
    }
  };

  if(!user){
    return <div>Loading......</div>
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name="name" value={user.name} onChange={handleChange}/>
        </label>
        <label>
          UserName : 
          <input type="text" name="username" value={user.username} onChange={handleChange}/>
        </label>
        <label>
          Phone Number : 
          <input type="text" name="phone" value={user.phone} onChange={handleChange}/>
        </label>
        <label>
          Email : 
          <input type="email" name="email" value={user.email} onChange={handleChange}/>
        </label>
        <label>
          Website : 
          <input type="text" name="website" value={user.website} onChange={handleChange}/>
        </label>
        <button type="submit">Update User Details</button>
      </form>
    </div>
  );
};

export default Edit;
