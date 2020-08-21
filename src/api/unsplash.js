import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization: 'Client-ID 2oOZ8RgvcI2JDE4AKO6B7ac60XTzAx4BKjRJda1N_TU',
  },
});
