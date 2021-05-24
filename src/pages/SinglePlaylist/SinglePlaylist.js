import { Link } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
export const SinglePlaylist = () => {
  const {
    state: { loadThisPlaylist: playlist },
    dispatch,
  } = useDataContext();
  return (
    <div>
      {playlist.videos && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {playlist.videos.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link
                  key={item.id}
                  to={`/video/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <VideoCard item={item} />
                </Link>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="btn primary outline"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_PLAYLIST",
                        payload: { item, playlist },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {playlist.videos.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Your Playlist is Empty</h1>
      )}
    </div>
  );
};
