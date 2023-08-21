import axios from 'axios';

export async function getDogPic () {
  const { data } = await axios.get(
    'https://dog.ceo/api/breeds/image/random',
  );
  return data;
}
