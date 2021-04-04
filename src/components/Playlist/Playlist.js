import { useDataContext } from "../../context/dataContext"

export const Playlist = () => {
    const {state:{playlist}, dispatch} = useDataContext()
    return(
        <div>
        <h2>Liked Videos</h2>
        <div className="list-container">
        
            {playlist.liked.map(item => {
                return (
                    <div
                        key={item.id}
                        className="card-container"
                        onClick={() => dispatch({type: "CHANGE_ROUTE_TO_VIDEO_PAGE", payload: item})}>
                        <img src={item.thumbnail} alt="thumbnail"/>
                        <h3>{item.name}</h3>
                    </div>
                )
            })}
        </div>
        </div>
    )
}