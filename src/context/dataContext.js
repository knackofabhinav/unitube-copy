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
  playlist: [
    {
      id: uuidv4(),
      name: "Hello World",
      videos: [
        {
          id: 1,
          name: "Haasil - Sunny Khan Durrani | Urdu Rap",
          url: "https://www.youtube.com/embed/38t50grgWSQ",
          thumbnail: "https://img.youtube.com/vi/38t50grgWSQ/maxresdefault.jpg",
        },
        {
          id: 2,
          name: "Umer Farooq - Patang (Official Audio)",
          url: "https://www.youtube.com/embed/sWXK5Errxkk",
          thumbnail: "https://img.youtube.com/vi/sWXK5Errxkk/maxresdefault.jpg",
        },
        {
          id: 3,
          name: "Old Bollywood Medley - Atif Aslam | Aesthetics اردو",
          url: "https://www.youtube.com/embed/xzn-y00ygaY",
          thumbnail: "https://img.youtube.com/vi/xzn-y00ygaY/hqdefault.jpg",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Vibes",
      videos: [
        {
          id: 4,
          name: "Umer Farooq - Keh Na (Official Video)",
          url: "https://www.youtube.com/embed/or4fdMBOUBI",
          thumbnail: "https://img.youtube.com/vi/or4fdMBOUBI/maxresdefault.jpg",
        },
        {
          id: 5,
          name: "Bharat Chauhan - Ghar [Official Music Video]",
          url: "https://www.youtube.com/embed/e44meSqTkH0",
          thumbnail: "https://img.youtube.com/vi/e44meSqTkH0/maxresdefault.jpg",
        },
        {
          id: 6,
          name:
            "GUMAAN - Young Stunners | Talha Anjum | Talhah Yunus | Prod. By Jokhay (Official Music Video)",
          url: "https://www.youtube.com/embed/jIQ0Dx-4peE",
          thumbnail: "https://img.youtube.com/vi/jIQ0Dx-4peE/maxresdefault.jpg",
        },
      ],
    },
  ],
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
