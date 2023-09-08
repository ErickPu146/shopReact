import axios from "axios";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/users/");
    return data.data
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const { data } = await axios.get(pokemon.url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const searchAPokemon = async (idOrName) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idOrName}`
    );
    return data;
  } catch (error) {
    console.error(error.message);
    return "searchedFailed";
  }
};
