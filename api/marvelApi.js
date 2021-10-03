import md5 from "md5";
import api from "./index";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default {
  getCharacters: async (offset) => {
    let hash = md5(publicRuntimeConfig.TIMESTAMP + publicRuntimeConfig.MARVEL_PRIVATE_KEY + publicRuntimeConfig.MARVEL_PUBLIC_KEY);
    const query = await api.get(`https://gateway.marvel.com/v1/public/characters?ts=${publicRuntimeConfig.TIMESTAMP}&apikey=${publicRuntimeConfig.MARVEL_PUBLIC_KEY}&hash=${hash}&limit=30&offset=${offset}`);
    return query;
  },
  getCharacterById: async (id) => {
    let hash = md5(publicRuntimeConfig.TIMESTAMP + publicRuntimeConfig.MARVEL_PRIVATE_KEY + publicRuntimeConfig.MARVEL_PUBLIC_KEY);
    const query = await api.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${publicRuntimeConfig.TIMESTAMP}&apikey=${publicRuntimeConfig.MARVEL_PUBLIC_KEY}&hash=${hash}`);
    return query;
  },
  getComicsByCharacter: async (id) => {
    let hash = md5(publicRuntimeConfig.TIMESTAMP + publicRuntimeConfig.MARVEL_PRIVATE_KEY + publicRuntimeConfig.MARVEL_PUBLIC_KEY);
    const query = await api.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${publicRuntimeConfig.TIMESTAMP}&apikey=${publicRuntimeConfig.MARVEL_PUBLIC_KEY}&hash=${hash}&limit=10&orderBy=-onsaleDate`);
    return query;
  },
};