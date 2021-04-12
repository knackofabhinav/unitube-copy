import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";
import { VideoCard } from "../Video Listing/VideoCard";
import { flushSync } from "react-dom";
export const LikedVideo = () => {
  const {
    state: { liked },
    dispatch,
  } = useDataContext();
  return (
    <div>
      {liked && (
        <div className="list-container">
          {liked.map((item) => {
            return (
              <div style={{display: "flex", flexDirection: "column"}}>
                <Link
                  key={item.id}
                  to={`/video/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <VideoCard item={item} />
                </Link>
                <button
                  className="btn outline primary"
                  onClick={(item) =>
                    dispatch({ type: "REMOVE_FROM_LIKED", payload: item })
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
      {liked.length === 0 && (
        <div>
          <h1 style={{textAlign: "center"}}>Seriously! You didnt liked Anything? 🙄</h1>
        </div>
      )}
    </div>
  );
};
