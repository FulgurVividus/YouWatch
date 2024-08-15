import axios from "axios";

const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "b3879271admsh557a9798459e6d7p1fe9f3jsne76a0b73625c",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
