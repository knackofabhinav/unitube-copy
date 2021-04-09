import { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { SinglePlaylist } from "./SinglePlaylist/SinglePlaylist";
import "./Playlist.css"

export const Playlist = () => {
  const [loadThisPlaylist, setLoadThisPlaylist] = useState({})
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();
  console.log(playlist);
  return (
    <div className="playlist-container">
      <h2>Playlists</h2>
      {playlist && (
        <div>
          <div className="list-container">
            <ul className="list">
              {playlist.map((each) => (
                <li key={each.id} onClick={() => setLoadThisPlaylist(each)}><h3>{each.name}</h3></li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <SinglePlaylist playlist={loadThisPlaylist}/>
    </div>
  );
};
