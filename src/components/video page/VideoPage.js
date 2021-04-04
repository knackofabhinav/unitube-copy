import {useDataContext} from "../../context/dataContext";
import "./VideoPage.css";

export const VideoPage = () => {
    const {
        state: {
            videoPage, addToPlaylistToast,
            playlist: {
                liked
            },
            toast
        },
        dispatch
    } = useDataContext()
    const addToLikedVideos = () => {
        dispatch({type: "ADD_TO_LIKED", payload: videoPage})
        setTimeout(() => {dispatch({type:"HIDE_LIKED_TOAST"})}, 3000)
    }
    const addToPlaylist = () => {
        dispatch({type: "ADD_TO_PLAYLIST"})
    }
    return (
        <div>
            <div className="videoWrapper">
            <iframe
            src={videoPage.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            </div>
            
            <h2>{videoPage.name}</h2>
            <div>
                <button
                    className="btn primary text"
                    onClick={() => addToLikedVideos(videoPage)}>
                    {liked.find(item => item.id === videoPage.id)
                        ? <i class="fas fa-thumbs-up"></i>
                        : <i class="far fa-thumbs-up"></i>}
                </button>
                <button className="btn primary text" onClick={() => addToPlaylist()}>
                    <i class="fas fa-list"></i>
                </button>
                <div
                    className="toast"
                    style={{
                    display: toast
                        ? "inline"
                        : "none",
                    backgroundColor: "white"
                }}>
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
            */
            }
        </div>
    )
}