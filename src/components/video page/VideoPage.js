import { useState } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../context/dataContext";
import { AddToPlaylistModal } from "./AddToPlaylistModal/AddToPlaylistModal";
import "./VideoPage.css";

export const VideoPage = () => {
  const {
    state: { liked, toast, videoListing, watchLater },
    dispatch,
  } = useDataContext();
  const { videoId } = useParams();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);

  const videoPageData = (videoListing, videoId) =>
    videoListing.find((video) => video._id == videoId);
  const videoPage = videoPageData(videoListing, videoId);

  const addToLikedVideos = () => {
    dispatch({ type: "ADD_TO_LIKED", payload: videoPage });
    console.log(videoPage);
    setTimeout(() => {
      dispatch({ type: "HIDE_LIKED_TOAST" });
    }, 3000);
  };

  return (
    <div style={{ display: "flex", padding: "0 2rem", width: "70vw" }}>
      {videoPage && (
        <div>
          <div className="videoWrapper">
            <iframe
              src={videoPage.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="video-title">{videoPage.name}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>{videoPage.views} views</p>
              <p className="video-title">{videoPage.channel}</p>
            </div>
            <div style={{ padding: "0 2rem" }}>
              <button
                className="btn primary text"
                onClick={() => addToLikedVideos(videoPage)}
              >
                {liked.find((item) => item.id === videoPage.id) ? (
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
                onClick={() => {
                  dispatch({ type: "ADD_TO_WATCH_LATER", payload: videoPage });
                }}
              >
                Watch Later
              </button>
            </div>

            {/* TOAST CONTENT */}
            {showAddToPlaylistModal && (
              <AddToPlaylistModal
                setShowAddToPlaylistModal={setShowAddToPlaylistModal}
                video={videoPage}
              />
            )}
            <div
              className="toast"
              style={{
                display: toast ? "inline" : "none",
                backgroundColor: "white",
              }}
            >
              <p>Added to Liked Playlist !</p>
            </div>
          </div>
          <div>
            <h5>Description</h5>
            <p>{videoPage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
