import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Registry Total</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <Link to="/admin/rt" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Registry Table</span>
              </li>
            </Link>
          <Link to="/admin/dm" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Departments Management</span>
            </li>
          </Link>
          <Link to="/admin/um" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>User Management</span>
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
