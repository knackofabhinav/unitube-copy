import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
import { Link } from "react-router-dom";
import { instance } from "../../instance";
import { toast } from "react-toastify";

export const WatchLater = () => {
  const {
    state: { watchLater },
    dispatch,
  } = useDataContext();
  console.log(watchLater);

  const removeFromWatchLater = async (videoId) => {
    try {
      const res = await instance.delete(`/watch-later/${videoId}`);
      toast.success("Successfully removed");
      dispatch({ type: "UPDATE_WATCHLATER", payload: res.data.watchLater });
    } catch (err) {
      toast.info("Failed to remove.");
      console.log(err);
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
          <h1 style={{ display: "block", textAlign: "center" }}>
            Seems Like You Have Already Watched Everything 😏
          </h1>
        </div>
      )}
    </div>
  );
};
