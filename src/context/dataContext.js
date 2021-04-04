import {createContext, useContext, useReducer} from "react";

const dataContext = createContext()

const reduce = (state, action) => {
    switch (action.type) {
        case "ADD_VIDEO_LIST_FROM_SERVER":
            return {
                ...state,
                videoListing: action.payload
            }
        case "CHANGE_ROUTE_TO_VIDEO_PAGE":
            return {
                ...state,
                route: "video-page",
                videoPage: action.payload
            }
        case "ADD_TO_LIKED":
            return {
                ...state,
                playlist: {
                    ...state.playlist,
                    liked: Array.from(new Set([
                        ...state.playlist.liked,
                        action.payload
                    ]))
                },
                toast: true
            }
        case "HIDE_LIKED_TOAST":
            return {
                ...state,
                toast: false
            }
        case "GO_TO_PLAYLIST":
            return {
                ...state,
                route: "playlist"
            }
        case "GO_TO_VIDEOS":
            return{
                ...state,
                route: "video-listing"
            }
        case "ADD_TO_PLAYLIST":
            return{
                ...state,
                addToPlaylistToast: true
            }
        default:
            break;
    }
    return state
}

const intialState = {
    videoListing: [],
    route: "video-listing",
    videoPage: {},
    playlist: {
        liked: []
    },
    toast: false,
    addToPlaylistToast: false
}

export const DataProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(reduce, intialState)
    return (
        <dataContext.Provider
            value={{
            state,
            dispatch
        }}>
            {children}
        </dataContext.Provider>
    )
}

export const useDataContext = () => {
    return (useContext(dataContext))
}