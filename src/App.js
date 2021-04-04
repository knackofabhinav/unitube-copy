import {useEffect} from 'react';
import './App.css';
import {Navigation} from "./components/navigation/Navigation"
import { Playlist } from './components/Playlist/Playlist';
import { VideoListing } from './components/video listing/VideoListing';
import { VideoPage } from './components/video page/VideoPage';
import { useDataContext } from './context/dataContext';
const axios = require("axios")

function App() {
  const {state:{route}, dispatch} = useDataContext()

  useEffect(() => {
    (async() => {
        try {
            const dataFromServer = await axios.get("/api/videos")
            dispatch({type:"ADD_VIDEO_LIST_FROM_SERVER", payload:dataFromServer.data.videos})
        } catch (error) {
            console.log(error)
        }
    })()
}, [])

  return (
    <div className="App">
      <Navigation />
      {route==="video-listing" && <VideoListing />}
      {route==="video-page" && <VideoPage/>}
      {route==="playlist" && <Playlist/>}
    </div>
  );
}

export default App;
