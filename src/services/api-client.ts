import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "353abc0b839941a9ad22073a35ef4776",
  },
});
