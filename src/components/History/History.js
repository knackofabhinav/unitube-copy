import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../Video Listing/VideoCard";
import { Link } from "react-router-dom"

export const History = () => {
  const {
    state: { history },
    dispatch,
  } = useDataContext();
  return (
    <div>
      {history.length === 0 && (
        <h1 style={{ textAlign: "center" }}>
          You Haven't Watched Anything Boi!
        </h1>
      )}
      {history.length !== 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="btn primary"
            onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
          >
            Clear History
          </button>
        </div>
      )}
      <div style={{display:"flex", flexWrap:"wrap"}}>
      {history.map((item) => {
        return(
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link
                  key={item.id}
                  to={`/video/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <VideoCard item={item} />
                </Link>
              </div>
          )
      })}
      </div>
    </div>
  );
};
