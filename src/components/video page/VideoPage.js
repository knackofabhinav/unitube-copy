import { useState } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../context/dataContext";
import { AddToPlaylistModal } from "./AddToPlaylistModal/AddToPlaylistModal";
import "./VideoPage.css";

export const VideoPage = () => {
  const {
    state: { liked, toast, videoListing },
    dispatch,
  } = useDataContext();
  const { videoId } = useParams();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);

  const videoPageData = (videoListing, videoId) =>
    videoListing.find((video) => video.id === Number(videoId));
  const videoPage = videoPageData(videoListing, videoId);

  const addToLikedVideos = () => {
    dispatch({ type: "ADD_TO_LIKED", payload: videoPage });
    console.log(videoPage);
    setTimeout(() => {
      dispatch({ type: "HIDE_LIKED_TOAST" });
    }, 3000);
  };

  const addToPlaylist = () => {
    dispatch({ type: "ADD_TO_PLAYLIST" });
  };

  const addToPlaylistHandler = (item) => {
    setShowAddToPlaylistModal(() => !showAddToPlaylistModal);
  };

  return (
    <div>
      {videoPage && (
        <div>
          <div className="videoWrapper">
            <iframe
              src={videoPage.url}
              title="YouTube video player"
              frameBorder="0"
              width="700"
              height="500"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>{videoPage.name}</h2>
          <div>
            <button
              className="btn primary text"
              onClick={() => addToLikedVideos(videoPage)}
            >
              {liked.find((item) => item.id === videoPage.id) ? (
                <i className="fas fa-thumbs-up"></i>
              ) : (
                <i className="far fa-thumbs-up"></i>
              )}
            </button>
            <button
              className="btn primary text"
              onClick={(item) => addToPlaylistHandler(item)}
            >
              <i className="fas fa-list"></i>
            </button>
            {showAddToPlaylistModal && (
              <AddToPlaylistModal
                setShowAddToPlaylistModal={setShowAddToPlaylistModal}
                video = {videoPage}
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
          {/*
                addToPlaylistToast && 
                <div className="addToPlaylistToast">
                    <h3>Add To Playlist</h3>
                    <p>Liked Videos</p>
                    <p>Create New Playlist</p>
                </div>
            */}
        </div>
      )}
    </div>
  );
};
