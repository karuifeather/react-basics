import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID mImuADhp0l1_6e8SErZuvjufK47tx7J7j-3qpVNz1zA',
  },
});
