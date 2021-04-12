import { useDataContext } from "../../context/dataContext";
import "./VideoListing.css";
import { Link } from "react-router-dom";
import { VideoCard } from "./VideoCard";
import { SideBar } from "./SideBar";
export const VideoListing = () => {
  const {
    state: { videoListing, route },
    dispatch,
  } = useDataContext();
  return (
    <div >
      {videoListing && (
        <div className="list-container">
          {videoListing.map((item) => {
            return (
              <Link
              key={item.id}
                to={`/video/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <VideoCard item={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
