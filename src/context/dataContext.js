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
        liked: [...state.liked.filter((item) => item.id !== action.payload.id)],
      };
    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...state.playlists,
          { id: uuidv4(), name: action.payload, videos: [] },
        ],
      };
    case "ADD_TO_THIS_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...state.playlists.map((item) => {
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
        playlists: [
          ...state.playlists.map((playlist) => {
            if (playlist.id === action.payload.playlist.id) {
              return {
                ...playlist,
                videos: playlist.videos.filter(
                  (item) => item.id !== action.payload.item.id
                ),
              };
            }
            return playlist;
          }),
        ],
        loadThisPlaylist: {...state.loadThisPlaylist, videos: [...state.loadThisPlaylist.videos.filter(
          (item) => item.id !== action.payload.item.id
        )] }
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...state.playlists.filter(playlist => playlist.id !== action.payload.id)
        ]
      }
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
    case "LOAD_THIS_PLAYLIST":
      return {
        ...state,
        loadThisPlaylist: action.payload.item
      }
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: Array.from(new Set([...state.history, action.payload.item]))
      }
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: []
      }
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLater: Array.from(new Set([...state.watchLater, action.payload]))
      }
    case "REMOVE_FROM_WATCH_LATER":
        return {
          ...state,
          watchLater: [...state.watchLater.filter((item) => item.id !== action.payload.id)],
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
  history: [],
  watchLater:[],
  loadThisPlaylist: {},
  playlists: [
    {
      id: uuidv4(),
      name: "Demo",
      videos: [
        {
          id: 11,
          name: `Defeat - Kahlil Gibran (A Life Changing Poem for Dark Times)`,
          channel: "BEKNOWN",
          views: "947,322",
          likes: "35K",
          dislikes: "292",
          description: `Read by Shane Morris
      -
      Kahlil Gibran was the key figure in a Romantic movement that transformed Arabic literature in the first half of the twentieth century. 
      -
      Full Poem:
      
      Defeat, my Defeat, my solitude and my aloofness;
      You are dearer to me than a thousand triumphs,
      And sweeter to my heart than all world-glory.
       
      Defeat, my Defeat, my self-knowledge and my defiance,
      Through you I know that I am yet young and swift of foot
      And not to be trapped by withering laurels.
      And in you I have found aloneness
      And the joy of being shunned and scorned.
       
      Defeat, my Defeat, my shining sword and shield,
      In your eyes I have read
      That to be enthroned is to be enslaved,
      And to be understood is to be leveled down,
      And to be grasped is but to reach one’s fullness
      And like a ripe fruit to fall and be consumed.
       
      Defeat, my Defeat, my bold companion,
      You shall hear my songs and my cries and my silences,
      And none but you shall speak to me of the beating of wings,
      And urging of seas,
      And of mountains that burn in the night,
      And you alone shall climb my steep and rocky soul.
       
      Defeat, my Defeat, my deathless courage,
      You and I shall laugh together with the storm,
      And together we shall dig graves for all that die in us,
      And we shall stand in the sun with a will,
      And we shall be dangerous.`,
          duration: "3:19",
          url: "https://www.youtube.com/embed/JE8taOWjVbc",
          thumbnail: "https://img.youtube.com/vi/JE8taOWjVbc/maxresdefault.jpg",
        },
        {
          id: 20,
          name: `When I Die - Rumi (Powerful Life Poetry)`,
          channel: "RedFrost Motivation",
          views: "683,322",
          likes: "41K",
          dislikes: "202",
          description: `Read by Shane Morris
      -
      Jalaluddin Rumi was an ancient Persian scholar and Sufi master. Today he is recognised as one of the greatest poets who ever lived, due in part to how his words seem to speak to the divine.
      
      #rumi​ #poetry​ #wisdom​ #death`,
          duration: "3:19",
          url: "https://www.youtube.com/embed/COAAvcpocU4",
          thumbnail: "https://img.youtube.com/vi/COAAvcpocU4/maxresdefault.jpg",
        },
        {
          id: 12,
          name: `Jordan Peterson's Ultimate Advice for Students and College Grads - STOP WASTING TIME`,
          channel: "Motivation2Study",
          views: "6,683,322",
          likes: "241K",
          dislikes: "2.2K",
          description: `Stop Wasting Time! This is Jordan Peterson's Ultimate Advice for Students, College Grads, and Everyone Alive!`,
          duration: "15:19",
          url: "https://www.youtube.com/embed/wsNzAuYDgy0",
          thumbnail: "https://img.youtube.com/vi/wsNzAuYDgy0/maxresdefault.jpg",
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
