import { useDataContext } from "../../context/dataContext";
import { VideoCard } from "../../components/Video Card/VideoCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const History = () => {
  const {
    state: { history },
    dispatch,
  } = useDataContext();

  const clearHistory = async () => {
    try {
      const res = await axios.delete("history");
      toast.success("Cleared History Successfully");
      dispatch({ type: "UPDATE_HISTORY", payload: res.data.history });
    } catch (err) {
      toast.error("Failed to clear History.");
      console.error(err);
    }
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      {history.length === 0 && (
        <h1 style={{ color: "#cecece", textAlign: "center" }}>
          Your history is empty.
        </h1>
      )}
      {history.length !== 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn primary" onClick={() => clearHistory()}>
            Clear History
          </button>
        </div>
      )}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {history.map((item) => {
          return (
            <div style={{ display: "flex" }}>
              <Link
                key={item.id}
                to={`/video/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <VideoCard item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
