import { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { toast } from "react-toastify";
import "./AddToPlaylistModal.css";
import axios from "axios";
export const AddToPlaylistModal = ({ setShowAddToPlaylistModal, videoId }) => {
  const {
    state: { playlists },
    dispatch,
  } = useDataContext();
  const [newPlaylistInput, setNewPlaylistInput] = useState("");
  const addNewPlaylist = async (playlistName) => {
    if (playlistName.length > 0) {
      try {
        const res = await axios.post("playlists", { playlistName });
        toast.success("New Playlist Created!");
        dispatch({ type: "UPDATE_PLAYLISTS", payload: res.data.playlists });
      } catch (err) {
        console.error(err);
      }
    } else {
      toast.error("Please enter a playlist name");
    }
  };

  const addToPlaylist = async (videoId, playlistId) => {
    try {
      const res = await axios.post(`playlists/${playlistId}`, { videoId });
      toast.success("successfully added");
      dispatch({ type: "UPDATE_PLAYLISTS", payload: res.data.playlists });
    } catch (err) {
      err.response.status === 409 && toast.info("Already in playlist.");
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-container" style={{ maxWidth: "30rem" }}>
        <div className="modal-top">
          <h3>Add To Playlist</h3>
        </div>
        <div className="modal-middle">
          <ul className="list">
            {playlists.map((item) => (
              <li
                style={{ display: "flex", justifyContent: "space-between" }}
                key={item._id}
              >
                <p>{item.playlistName}</p>
                <button
                  className="btn primary"
                  onClick={() => {
                    addToPlaylist(videoId, item._id);
                  }}
                >
                  {item.videos.some((item) => item._id === videoId)
                    ? "Added"
                    : "Add"}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="input-container">
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
