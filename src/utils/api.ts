import axios from 'axios';

export async function getCharacters () {
  const { data } = await axios.get(
    'http://localhost:3000/characters',
  );
  return data;
}
