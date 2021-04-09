import { useState } from "react";
import { useDataContext } from "../../../context/dataContext";
import "./AddToPlaylistModal.css";
export const AddToPlaylistModal = ({ setShowAddToPlaylistModal, video }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();
  const [newPlaylistInput, setNewPlaylistInput] = useState("");
  const addNewPlaylist = (newPlaylistInput) => {
    dispatch({ type: "ADD_NEW_PLAYLIST", payload: newPlaylistInput });
  };
  const addToThisPlaylist = (video, playlist) => {
    dispatch({ type: "ADD_TO_THIS_PLAYLIST", payload: { video, playlist } });
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-top">
          <h3>Add To Playlist</h3>
        </div>
        <div className="modal-middle">
          <ul className="list">
            {playlist.map((item) => (
              <li
                style={{ display: "flex", justifyContent: "space-between" }}
                key={item.id}
              >
                <p>{item.name}</p>
                <button
                  className="btn primary"
                  onClick={() => addToThisPlaylist(video, item)}
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div class="input-container">
          <input
            placeholder="New Playlist"
            onChange={(e) => setNewPlaylistInput(e.target.value)}
            aria-label="NewPlaylist"
          />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => addNewPlaylist(newPlaylistInput)}
          >
            Add New Playlist
          </span>
        </div>
        <div className="modal-bottom">
          <button
            className="btn secondary outline"
            onClick={() => setShowAddToPlaylistModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
