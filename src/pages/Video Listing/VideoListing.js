import { useDataContext } from "../../context/dataContext";
import "./VideoListing.css";
import loading from "../../assets/loading.svg";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components/Video Card/VideoCard";
export const VideoListing = () => {
  const {
    state: { videoListing },
    dispatch,
  } = useDataContext();
  return (
    <div>
      {videoListing.length > 0 ? (
        <div className="list-container">
          {videoListing.map((item) => {
            return (
              <Link
                onClick={() =>
                  dispatch({ type: "ADD_TO_HISTORY", payload: { item } })
                }
                key={item._id}
                to={`/video/${item._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <VideoCard item={item} />
              </Link>
            );
          })}
        </div>
      ) : (
        //TODO: Add Loading Animation here
        <div
          style={{
            height: "100vh",

            justifyContent: "center",
            display: "flex",
          }}
        >
          <img style={{ width: "50%" }} src={loading} alt="Loading" />
        </div>
      )}
    </div>
  );
};
