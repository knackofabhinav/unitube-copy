import { useDataContext } from "../../context/dataContext";
import "./Playlist.css";
import { Link } from "react-router-dom";

export const Playlist = () => {
  const {
    state: { playlists },
    dispatch,
  } = useDataContext();
  console.log(playlists);
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
                      to={`/playlist/${item.id}`}
                    >
                      <li
                        key={item.id}
                        onClick={() =>
                          dispatch({
                            type: "LOAD_THIS_PLAYLIST",
                            payload: { item },
                          })
                        }
                        style={{ display: "flex", minWidth: "20rem" }}
                      >
                        <h3>{item.name}</h3>
                      </li>
                    </Link>
                    <button
                      className="btn primary outline"
                      onClick={() =>
                        dispatch({ type: "DELETE_PLAYLIST", payload: item })
                      }
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
