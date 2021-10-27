import Logo from "../../assets/logo/universe.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Navigation = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
      <div className="navigation">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              to="/history"
              activeStyle={{ color: "var(--primary-color)" }}
            >
              <i class="fa fa-history" aria-hidden="true"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/playlist"
              activeStyle={{ color: "var(--primary-color)" }}
            >
              Playlists
            </NavLink>
          </li>

          <li>
            {isLoggedIn ? (
              <button
                className="btn primary"
                onClick={() => {
                  logout();
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
