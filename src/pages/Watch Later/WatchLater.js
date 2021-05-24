import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
import { Link } from "react-router-dom";

export const WatchLater = () => {
  const {
    state: { watchLater },
    dispatch,
  } = useDataContext();
  console.log(watchLater);
  return (
    <div className="list-container">
      {watchLater.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              key={item.id}
              to={`/video/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <VideoCard item={item} />
            </Link>
            <button
              className="btn outline primary"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: item })
              }
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
