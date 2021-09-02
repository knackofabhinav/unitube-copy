import { Link } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
import axios from "axios";
export const SinglePlaylist = () => {
  const {
    state: { loadThisPlaylist: playlist },
    dispatch,
  } = useDataContext();

  const removeVideoFromPlaylist = async (videoId, playlistId) => {
    try {
      const res = await axios.delete(`/playlists/${playlistId}/${videoId}`);
      console.log(res.data);
      dispatch({
        type: "UPDATE_PLAYLISTS",
        payload: res.data.playlists,
      });
      const updatedPlaylist = res.data.playlists.find(
        (playlist) => playlist._id === playlistId
      );
      dispatch({ type: "UPDATE_CURRENT_PLAYLIST", payload: updatedPlaylist });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {playlist.videos && (
        <div
          style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>{playlist.playlistName}</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {playlist.videos.map((video) => {
              return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    key={video._id}
                    to={`/video/${video._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <VideoCard item={video} />
                  </Link>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn primary outline"
                      onClick={() =>
                        removeVideoFromPlaylist(video._id, playlist._id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {playlist.videos.length === 0 && (
        <h2 style={{ textAlign: "center", color: "#cecece" }}>
          Your Playlist is Empty
        </h2>
      )}
    </div>
  );
};
