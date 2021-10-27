import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const WatchLater = () => {
  const {
    state: { watchLater },
    dispatch,
  } = useDataContext();

  const removeFromWatchLater = async (videoId) => {
    try {
      const res = await axios.delete(`/watch-later/${videoId}`);
      toast.success("Successfully removed");
      dispatch({ type: "UPDATE_WATCHLATER", payload: res.data.watchLater });
    } catch (err) {
      toast.info("Failed to remove.");
      console.error(err);
    }
  };

  return (
    <div className="list-container">
      {watchLater.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              key={item._id}
              to={`/video/${item._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <VideoCard item={item} />
            </Link>
            <button
              className="btn outline primary"
              onClick={() => removeFromWatchLater(item._id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      {watchLater.length === 0 && (
        <div>
          <h1
            style={{ color: "#cecece", display: "block", textAlign: "center" }}
          >
            Your watch later is Empty.
          </h1>
        </div>
      )}
    </div>
  );
};
