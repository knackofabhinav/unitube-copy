import { useDataContext } from "../../context/dataContext";
import "./Playlist.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const Playlist = () => {
  const {
    state: { playlists },
    dispatch,
  } = useDataContext();

  const deletePlaylist = async (playlistId) => {
    try {
      const res = await axios.delete(`/playlists/${playlistId}`);
      dispatch({ type: "UPDATE_PLAYLISTS", payload: res.data.playlists });
      toast.success("Playlist Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="playlist-container">
      <div className="playlists">
        {playlists && (
          <div>
            <div className="list-container">
              <ul className="list">
                {playlists.map((item) => (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                      to={`/playlist/${item._id}`}
                    >
                      <li
                        key={item._id}
                        onClick={() =>
                          dispatch({
                            type: "LOAD_THIS_PLAYLIST",
                            payload: { item },
                          })
                        }
                        style={{ display: "flex", minWidth: "20rem" }}
                      >
                        <h3>{item.playlistName}</h3>
                      </li>
                    </Link>
                    <button
                      className="btn primary outline"
                      onClick={() => deletePlaylist(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        {playlists.length === 0 && (
          <h1>You haven't created any playlist man 😕</h1>
        )}
      </div>
    </div>
  );
};
