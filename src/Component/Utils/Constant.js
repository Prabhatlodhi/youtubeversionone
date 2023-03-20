
export const OFFSET_LIVE_CHAT = 10;

const AUTH_KEY = "AIzaSyD-lLqMQtqXooXhmqn1Vie8OM35iQ49frw"

const MAXVIDEOS = 39;

export const YOU_TUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MAXVIDEOS}&regionCode=US&key=`+AUTH_KEY


export const SEARCH_BAR_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
 