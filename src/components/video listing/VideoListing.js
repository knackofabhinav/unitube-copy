import {useDataContext} from "../../context/dataContext"
import "./VideoListing.css"

export const VideoListing = () => {
    const {
        state: {
            videoListing,
            route
        },
        dispatch
    } = useDataContext()
    return (
        <div className="list-container">
            {videoListing.map(item => {
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
    )
}