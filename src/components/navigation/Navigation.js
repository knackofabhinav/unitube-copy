import Logo from "../../assets/logo/universe.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ul>
          <li>
            <NavLink to="/" activeStyle={{ color: "var(--primary-color)" }}>
              <i className="fa fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked-videos"
              activeStyle={{ color: "var(--primary-color)" }}
            >
              <i className="far fa-thumbs-up"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlist"
              activeStyle={{ color: "var(--primary-color)" }}
            >
              Playlist
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/liked-videos"
              activeStyle={{ color: "var(--primary-color)" }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
