import { useContext } from "react";
import "./Card.css";
import {useNavigate} from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";

const Card = ({ id, name, email, phone, website, company }) => {
  const {deleteUser} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className="user-card">
      <div className="basic-details">
        <p>
          {" "}
          <strong>id : </strong> {id}
        </p>
        <p>
          {" "}
          <strong>User Name : </strong>
          {name}
        </p>
      </div>
      <div className="user-contact-details">
        <p>
          <strong>Phone No. : </strong>
          {phone}
        </p>
        <p>
          <strong>Email : </strong>
          {email}
        </p>
        <p>
          <strong>Website :</strong> {website}
        </p>
      </div>
      <div className="other-details">
        <p>
          <strong>Company Name :</strong> {company}
        </p>
      </div>
      <div className="action-buttons">
        <button onClick={() => navigate(`/edit/${id}`)} className="edit-user">Edit</button>
        <button onClick={() => deleteUser(id) } className="delete-user">Delete</button>
      </div>
    </div>
  );
};

export default Card;
