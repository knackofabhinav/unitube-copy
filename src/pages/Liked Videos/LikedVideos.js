import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { VideoCard } from "../../components/Video Card/VideoCard";
import axios from "axios";

export const LikedVideo = () => {
  const {
    state: { liked },
    dispatch,
  } = useDataContext();

  const removeLiked = async (item) => {
    try {
      const res = await axios.delete(`/liked/${item._id}`);
      if (res.data.success === true) {
        toast.success("Removed Successfully");
        return dispatch({
          type: "UPDATE_LIKED",
          payload: res.data.likedVideos,
        });
      }
      return dispatch({ type: "UPDATE_LIKED", payload: res.data.LikedVideos });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {liked.length === 0 && (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Seriously! You didnt liked Anything? 🙄
          </h1>
        </div>
      )}
      {liked && (
        <div className="list-container">
          {liked.map((item) => {
            return (
              <div
                key={item._id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Link
                  key={item._id}
                  to={`/video/${item._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <VideoCard item={item} />
                </Link>
                <button
                  className="btn outline primary"
                  onClick={() => removeLiked(item)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
