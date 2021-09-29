import axios from "axios";

// const pokeApiInstance = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/",
//   timeout: 1000,
// });

const pokeAPI = {
  pokemonGroup: {
    pokemon: (fullUrl) =>
      axios
        .get(fullUrl)
        .then((response) => response.data),
  },
};

export default pokeAPI