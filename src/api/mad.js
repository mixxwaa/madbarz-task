import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.madbarz.com/api/jobs',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACESS_TOKEN}`,
  },
});
