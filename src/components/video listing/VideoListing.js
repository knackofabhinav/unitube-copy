import { useDataContext } from "../../context/dataContext";
import "./VideoListing.css";
import { Link } from "react-router-dom";

export const VideoListing = () => {
  const {
    state: { videoListing, route },
    dispatch,
  } = useDataContext();
  return (
    <div>
      {videoListing && (
        <div className="list-container">
          {videoListing.map((item) => {
            return (
              <Link to={`/video/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                <div
                  key={item.id}
                  className="card-container"
                >
                  <img className="thumbnail" src={item.thumbnail} alt="thumbnail" />
                  <h3>{item.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
