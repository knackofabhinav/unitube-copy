import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../context/dataContext";
import { AddToPlaylistModal } from "../../components/AddToPlaylistModal/AddToPlaylistModal";
import "./VideoPage.css";
import { toast } from "react-toastify";
import axios from "axios";

export const VideoPage = () => {
  const {
    state: { liked, videoListing },
    dispatch,
  } = useDataContext();
  const { videoId } = useParams();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const videoPageData = (videoListing, videoId) =>
    videoListing.find((video) => video._id === videoId);
  const videoPage = videoPageData(videoListing, videoId);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("/history", { videoId });
        console.log(res);
        if (res.data.success) {
          return dispatch({
            type: "UPDATE_HISTORY",
            payload: res.data.history,
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const addToWatchLater = async (videoId) => {
    try {
      const res = await axios.post("/watch-later", { videoId });
      toast.success("Video Added");
      dispatch({
        type: "UPDATE_WATCHLATER",
        payload: res.data.watchLater,
      });
    } catch (err) {
      if (!err.response.data.success) {
        toast.info(err.response.data.message);
      }
      console.error(err);
    }
  };

  const addToLikedVideos = async (videoId) => {
    try {
      const res = await axios.post("/liked", {
        videoId,
      });
      if (res.data.success === true) {
        toast.success("Liked Successfully");
        return dispatch({
          type: "UPDATE_LIKED",
          payload: res.data.likedVideos,
        });
      }
      if (res.data.success === false) {
        toast.info(res.data.message);
      }
    } catch (err) {
      if (err.response.status === 403) toast.info("Please Login");
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {videoPage && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="videoWrapper">
            <iframe
              src={`${videoPage.url}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ margin: "1rem" }}>
            <p className="video-title">{videoPage.name}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={{ fontWeight: "bold" }}>{videoPage.views} views</p>
              </div>
              <div>
                <button
                  className="btn primary text"
                  onClick={() => addToLikedVideos(videoPage._id)}
                >
                  {liked?.some((item) => item._id === videoPage._id) ? (
                    <i className="fas fa-thumbs-up"></i>
                  ) : (
                    <i className="far fa-thumbs-up"></i>
                  )}
                  {videoPage.likes}
                </button>
                <button
                  className="btn primary text"
                  onClick={() =>
                    setShowAddToPlaylistModal(() => !showAddToPlaylistModal)
                  }
                >
                  <i className="fas fa-list"></i>
                </button>
                <button
                  className="btn primary text"
                  onClick={() => addToWatchLater(videoPage._id)}
                >
                  <i className="far fa-clock"></i>
                </button>
              </div>

              {/* TOAST CONTENT */}
              {showAddToPlaylistModal && (
                <AddToPlaylistModal
                  setShowAddToPlaylistModal={setShowAddToPlaylistModal}
                  videoId={videoPage._id}
                />
              )}
              {/* <div
                className="toast"
                style={{
                  display: toast ? "inline" : "none",
                  backgroundColor: "white",
                }}
              >
                <p>Added to Liked Playlist !</p>
              </div> */}
            </div>
            <div>
              <p className="video-title">{videoPage.channel}</p>

              <h5>Description</h5>
              <p className="video-description">{videoPage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
