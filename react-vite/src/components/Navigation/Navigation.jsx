import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { thunkLogout } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";

function Navigation() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
  }


  return (
    <>
      <div className="landing-page__navbar">
        <NavLink className="landing-page__nav-button" to='/home'>All Grade Levels</NavLink>
        <button className="landing-page__nav-button" onClick={handleLogout} >Logout</button>
      </div>
      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <ProfileButton />
        </li>
      </ul> */}
    </>
  );
}

export default Navigation;
