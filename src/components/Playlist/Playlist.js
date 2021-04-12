import { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { SinglePlaylist } from "./SinglePlaylist/SinglePlaylist";
import "./Playlist.css";

export const Playlist = () => {
  const [loadThisPlaylist, setLoadThisPlaylist] = useState({});
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();
  console.log(playlist);
  return (
    <div className="playlist-container">
      <div className="playlists">
        <h2>Playlists</h2>
        {playlist && (
          <div>
            <div className="list-container">
              <ul className="list">
                {playlist.map((each) => (
                  <li key={each.id} onClick={() => setLoadThisPlaylist(each)} style={{display:"flex",minWidth:"20rem"}}>
                    <h3>{each.name}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <SinglePlaylist playlist={loadThisPlaylist} />
      </div>
    </div>
  );
};
