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

  console.log(playlists);

  const deletePlaylist = async (playlistId) => {
    try {
      const res = await axios.delete(`/playlists/${playlistId}`);
      console.log(res.data.playlists);
      dispatch({ type: "UPDATE_PLAYLISTS", payload: res.data.playlists });
      toast.success("Playlist Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        {playlists.length !== 0 ? (
          <div>
            <div>
              <ul className="list">
                {playlists.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      width: "90%",
                      justifyContent: "center",
                      padding: "1rem",
                      borderBottom: "1px solid #cecece",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                      onClick={() =>
                        dispatch({
                          type: "LOAD_THIS_PLAYLIST",
                          payload: { item },
                        })
                      }
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
                        style={{ maxWidth: "100%" }}
                      >
                        <h3>{item.playlistName}</h3>
                      </li>
                    </Link>
                    <button
                      className="btn primary outline"
                      onClick={() => {
                        deletePlaylist(item._id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <h1 style={{ color: "#cecece", textAlign: "center" }}>
            You haven't created any playlist yet. 😕
          </h1>
        )}
      </div>
    </div>
  );
};
