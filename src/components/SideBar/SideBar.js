import "./SideBar.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidenav-container">
      <NavLink className="navlink" end activeClassName="selected" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" activeClassName="selected" to="/playlist">
        Playlist
      </NavLink>
      <NavLink
        className="navlink"
        activeClassName="selected"
        to="/liked-videos"
      >
        Liked Videos
      </NavLink>
      <NavLink className="navlink" activeClassName="selected" to="/watch-later">
        Watch Later
      </NavLink>
      <NavLink className="navlink" activeClassName="selected" to="/history">
        History
      </NavLink>
    </div>
  );
};
