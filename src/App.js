import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { LikedVideo } from "./components/Liked Videos/LikedVideos";
import { Navigation } from "./components/Navigation/Navigation";
import { Playlist } from "./components/Playlist/Playlist";
import { VideoListing } from "./components/Video Listing/VideoListing";
import { VideoPage } from "./components/video page/VideoPage";
import { useDataContext } from "./context/dataContext";
const axios = require("axios");

function App() {
  const { dispatch } = useDataContext();

  useEffect(() => {
    (async () => {
      try {
        const dataFromServer = await axios.get("/api/videos");
        dispatch({
          type: "ADD_VIDEO_LIST_FROM_SERVER",
          payload: dataFromServer.data.videos,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/video-page" element={<VideoPage />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/liked-videos" element={<LikedVideo />}/>
      </Routes>
    </div>
  );
}

export default App;
