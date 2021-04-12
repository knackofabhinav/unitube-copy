import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useReducer } from "react";

const dataContext = createContext();

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO_LIST_FROM_SERVER":
      return {
        ...state,
        videoListing: action.payload,
      };
    case "ADD_TO_LIKED":
      return {
        ...state,
        liked: Array.from(new Set([...state.liked, action.payload])),
        toast: true,
      };
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        liked: state.liked.filter(item => item.id !== action.payload.item.id)
      }
    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist,
          { id: uuidv4(), name: action.payload, videos: [] },
        ],
      };
    case "ADD_TO_THIS_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist.map((item) => {
            if (item.id === action.payload.playlist.id) {
              return {
                ...item,
                videos: Array.from(
                  new Set([...item.videos, action.payload.video])
                ),
              };
            }
            return item;
          }),
        ],
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist.map(playlist => {
          if (playlist.id === action.payload.playlist.id){
            return {...playlist, videos:playlist.videos.filter(item => item.id !== action.payload.item.id)}
          } return playlist
        })]
      };
    case "HIDE_LIKED_TOAST":
      return {
        ...state,
        toast: false,
      };
    case "ADD_TO_VIDEO_PAGE":
      return {
        ...state,
        videoPage: action.payload,
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        addToPlaylistToast: true,
      };
    default:
      break;
  }
  return state;
};

const intialState = {
  videoListing: [],
  videoPage: {},
  liked: [],
  saved: [],
  playlist: [],
  toast: false,
  addToPlaylistToast: false,
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, intialState);
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(dataContext);
};
