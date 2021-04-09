import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";
export const LikedVideo = () => {
  const {
    state: { liked },
  } = useDataContext();
  console.log(liked);
  return (
    <div>
      {liked && (
        <div className="list-container">
          {liked.map((item) => {
            return (
              <Link
                to={`/video/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div key={item.id} className="card-container">
                  <img src={item.thumbnail} alt="thumbnail" />
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
