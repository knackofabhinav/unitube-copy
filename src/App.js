import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { LikedVideo } from "./components/Liked Videos/LikedVideos";
import { Navigation } from "./components/Navigation/Navigation";
import { Playlist } from "./components/Playlist/Playlist";
import { SideBar } from "./components/Video Listing/SideBar";
import { VideoListing } from "./components/Video Listing/VideoListing";
import { VideoPage } from "./components/video page/VideoPage";
import { WatchLater } from "./components/Watch Later/WatchLater";
import { History } from "./components/History/History";
import { useDataContext } from "./context/dataContext";
import { Login } from "./components/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { SinglePlaylist } from "./components/Playlist/SinglePlaylist/SinglePlaylist";
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
      <div style={{ display: "grid", gridTemplateColumns: "2fr 9fr" }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/video-page" element={<VideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <PrivateRoute path="/playlist" element={<Playlist />} />
          <PrivateRoute path="/playlist/:id" element={<SinglePlaylist />} />
          <PrivateRoute path="/liked-videos" element={<LikedVideo />} />
          <PrivateRoute path="/watch-later" element={<WatchLater />} />
          <PrivateRoute path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
