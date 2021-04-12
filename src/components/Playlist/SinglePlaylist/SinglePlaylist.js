import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/dataContext";
export const SinglePlaylist = ({ playlist }) => {
  const { dispatch } = useDataContext();
  return (
    <div>
      {playlist.videos && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {playlist.videos.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/video/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div key={item.id} className="card-container">
                  <img src={item.thumbnail} alt="thumbnail" />
                  <h3>{item.name}</h3>
                  <button
                    className="btn primary outline"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch({
                        type: "REMOVE_FROM_PLAYLIST",
                        payload: { item, playlist },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
