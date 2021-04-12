import "./VideoCard.css"

export const VideoCard = ({ item }) => {
  return (
    <div key={item.id} className="card-container">
      <div>
      <img className="thumbnail" src={item.thumbnail} alt="thumbnail" />
      <p className="timestamp">{item.duration}</p>
      </div>
      <div>
        <p className="video-name">{item.name}</p>
        <p className="channel-name">{item.channel}</p>
      </div>
    </div>
  );
};
