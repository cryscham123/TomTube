import axios from "axios";

class Youtube {
    constructor(key) {
        this.key = key;
    }
    mostViewed= async() => {
        const { data: { items } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`);
        return items;
    }
    search= async(pathname) => {
        const { data: { items } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${pathname.slice(1)}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        return items;
    }
}
export default Youtube