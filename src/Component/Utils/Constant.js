

const AUTH_KEY = "AIzaSyD-lLqMQtqXooXhmqn1Vie8OM35iQ49frw"

const MAXVIDEOS = 40;
export const YOU_TUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MAXVIDEOS}&regionCode=IN&key=`+AUTH_KEY
