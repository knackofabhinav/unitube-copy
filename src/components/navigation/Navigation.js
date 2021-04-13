import Logo from "../../assets/logo/universe.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../context/authContext";

export const Navigation = () => {
  const { login, setLogin } = useLogin();
  return (
    <div>
      <div className="navigation">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ul style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <li>
            <NavLink to="/" end activeStyle={{ color: "var(--primary-color)" }}>
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
            {login ? (
              <button className="btn primary"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                activeStyle={{ color: "var(--primary-color)" }}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
