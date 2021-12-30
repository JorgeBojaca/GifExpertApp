const getGifs = async (category = "") => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=7QqNPRiEtGM1Di7KNWaP746ZBCa6bvzB`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, images, title }) => {
    return {
      id,
      title,
      url: images.downsized_medium?.url,
    };
  });

  return gifs;
};

export default getGifs;
