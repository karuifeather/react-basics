import axios from 'axios';

const KEY = 'AIzaSyDB15ifwy9onz14W0Ma5ovrvGZRg--ZeDI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5, // default is 5, btw
    key: KEY,
  },
});
