import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/dataContext";
import { VideoCard } from "../../Video Listing/VideoCard";
export const SinglePlaylist = ({ playlist }) => {
  const { dispatch } = useDataContext();
  return (
    <div>
      {playlist.videos && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {playlist.videos.map((item) => {
            return (
              <div>
                <Link
                  key={item.id}
                  to={`/video/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <VideoCard item={item} />
                </Link>
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: item });
                  }}
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
