import { createServer } from "miragejs"

export function setupMockServer() {
  createServer({
    routes() {
      this.get("/api/videos", () => ({
        videos: [
            {
                id: 1,
                name: "Haasil - Sunny Khan Durrani | Urdu Rap",
                url: "https://www.youtube.com/embed/38t50grgWSQ",
                thumbnail: "https://img.youtube.com/vi/38t50grgWSQ/maxresdefault.jpg"
            },
            {
                id: 2,
                name: "Umer Farooq - Patang (Official Audio)",
                url: "https://www.youtube.com/embed/sWXK5Errxkk",
                thumbnail: "https://img.youtube.com/vi/sWXK5Errxkk/maxresdefault.jpg"
            },
            {
                id: 3,
                name: "Old Bollywood Medley - Atif Aslam | Aesthetics اردو",
                url: "https://www.youtube.com/embed/xzn-y00ygaY",
                thumbnail: "https://img.youtube.com/vi/xzn-y00ygaY/hqdefault.jpg"
            },
            {
                id: 4,
                name: "Umer Farooq - Keh Na (Official Video)",
                url: "https://www.youtube.com/embed/or4fdMBOUBI",
                thumbnail: "https://img.youtube.com/vi/or4fdMBOUBI/maxresdefault.jpg"
            },
            {
                id: 5,
                name: "Bharat Chauhan - Ghar [Official Music Video]",
                url: "https://www.youtube.com/embed/e44meSqTkH0",
                thumbnail: "https://img.youtube.com/vi/e44meSqTkH0/maxresdefault.jpg"
            },
            {
                id: 6,
                name: "GUMAAN - Young Stunners | Talha Anjum | Talhah Yunus | Prod. By Jokhay (Official Music Video)",
                url: "https://www.youtube.com/embed/jIQ0Dx-4peE",
                thumbnail: "https://img.youtube.com/vi/jIQ0Dx-4peE/maxresdefault.jpg"
            },
            {
                id: 7,
                name: "Kaavish - Baat Unkahi feat. Samra Khan",
                url: "https://www.youtube.com/embed/rn9aNVsABvc",
                thumbnail: "https://img.youtube.com/vi/rn9aNVsABvc/hqdefault.jpg"
            },
            {
                id: 8,
                name: "Bharat Chauhan - Tu Hoti Toh [Official Music Video]",
                url: "https://www.youtube.com/embed/cVDASbWZ_KI",
                thumbnail: "https://img.youtube.com/vi/cVDASbWZ_KI/maxresdefault.jpg"
            },
            {
                id: 9,
                name: "RIHA by Anuv Jain (Studio)",
                url: "https://www.youtube.com/embed/9et5qzuzbQM",
                thumbnail: "https://img.youtube.com/vi/9et5qzuzbQM/maxresdefault.jpg"
            }
        ],
      }))
    },
  })
}