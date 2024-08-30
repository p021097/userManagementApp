import { useContext, useState } from "react";
import "./Add.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const {createNewUser} = useContext(StoreContext)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    website: "",
    email: "",
    address: {
      city: "",
      street: "",
      suite: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['street','city','suite','zipcode'].includes(name)) {
      setUser((prevData) => ({
        ...prevData,
        address:{
          ...prevData.address,
          [name] : value
        }
      }))
    } else if(['lat','lng'].includes(name)) {
      setUser((prevData) => ({
        ...prevData,
        address:{
          ...prevData.address,
          geo:{
            ...prevData.address.geo,
            [name] : value
          }
        }
      }))
    }else if(['bs','catchPhrase','companyName'].includes(name)){
      setUser((prevData)=> ({
        ...prevData,
        company:{
          ...prevData.company,
          [name] : value
        }
      }))
    }else{
      setUser((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!user.name || !user.phone || !user.username || !user.email){
      alert('Please fill the required')
      return
    }

    if(user){
      createNewUser(user)
      navigate('/')
    }

  }

  return (
    <div className="add">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="basic-details">
          <h5>Basic Details</h5>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Please enter your name"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Please enter username"
          />
          
        </div>
        <div className="contact-details">
            <h5>Contact Details</h5>
            <input
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Please enter you phone number"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Please enter email"
            />
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="Please enter website"
            />
          </div>
        <div className="address">
          <h5>Address : </h5>
          <input
            type="text"
            name="street"
            value={user.address.street}
            onChange={handleChange}
            placeholder="Street"
          />
          <input
            type="text"
            name="suite"
            value={user.address.suite}
            onChange={handleChange}
            placeholder="Suite"
          />
          <input
            type="text"
            name="city"
            value={user.address.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="number"
            name="zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
          />
          <div className="location">
            <input
              type="text"
              name="lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              placeholder="Lantitute"
            />
            <input
              type="text"
              name="lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              placeholder="Longitude"
            />
          </div>
        </div>
        <div className="company-details">
          <h5>Company Details</h5>
          <input
            type="text"
            name="companyName"
            value={user.company.companyName}
            onChange={handleChange}
            placeholder="Company name"
          />
          <input
            type="text"
            name="catchPhrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            placeholder="Catch Phrase"
          />
          <input
            type="text"
            name="bs"
            value={user.company.bs}
            onChange={handleChange}
            placeholder="BS"
          />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default Add;
