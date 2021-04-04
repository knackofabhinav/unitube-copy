import Logo from '../../assets/logo/universe.png'
import { useDataContext } from '../../context/dataContext'
import "./Navigation.css"

export const Navigation = () => {
    const {state:{route}, dispatch} = useDataContext()
    return(
        <div>
            <div className="navigation">
            <a href="/">
            <img src={Logo} alt="logo"/></a>
            <ul>
                <li onClick={() => {dispatch({type: "GO_TO_VIDEOS"})}}><i class="fa fa-home"></i></li>
                <li onClick={() => {dispatch({type: "GO_TO_PLAYLIST"})}}>Playlist</li>
                <li><i class="fa fa-search"></i></li>
            </ul>
        </div>
        </div>
    )
}