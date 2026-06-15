import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/' ,
  params: {
    key: '4fd3ea37f3694cdfa556f2bbc0f249f6'
  }
}) 