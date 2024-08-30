import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <button onClick={()=> navigate('/')}>Home</button>
        <button onClick={()=> navigate('/add')}>Add new user</button>
      </div>
    </div>
  );
};

export default Navbar;
