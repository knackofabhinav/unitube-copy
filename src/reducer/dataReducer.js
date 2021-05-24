export const reduce = (state, action) => {
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
          { id: 1, name: action.payload, videos: [] },
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
        loadThisPlaylist: {
          ...state.loadThisPlaylist,
          videos: [
            ...state.loadThisPlaylist.videos.filter(
              (item) => item.id !== action.payload.item.id
            ),
          ],
        },
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...state.playlists.filter(
            (playlist) => playlist.id !== action.payload.id
          ),
        ],
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
    case "LOAD_THIS_PLAYLIST":
      return {
        ...state,
        loadThisPlaylist: action.payload.item,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: Array.from(new Set([...state.history, action.payload.item])),
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLater: Array.from(new Set([...state.watchLater, action.payload])),
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: [
          ...state.watchLater.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      break;
  }
  return state;
};
