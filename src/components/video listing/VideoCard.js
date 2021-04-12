import "./VideoCard.css"

export const VideoCard = ({ item }) => {
  return (
    <div key={item.id} className="card-container">
      <img className="thumbnail" src={item.thumbnail} alt="thumbnail" />
      <p>{item.name}</p>
      <p>{item.channel}</p>
      <p>{item.duration}</p>
    </div>
  );
};
