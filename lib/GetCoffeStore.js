import { createApi } from 'unsplash-js';
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});
const getPhotos = async () => {
  const unsplashPhotos = await unsplashApi.search.getPhotos({
    query: 'coffe shop',
    page: 1,
    perPage: 10,
  });
  const photosURL = unsplashPhotos.response.results.map((result) => result.urls.small);
  return photosURL;
};
export const GetCoffeStores = async (ll = '50.84448186521446,4.352756234307316') => {
  const photos = await getPhotos();
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_AUTORIZATION,
    },
  };
  const URL = 'https://api.foursquare.com/v3/places/search';
  const date = new Date();
  const response = await fetch(
    `${URL}?ll=${ll}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&v=${date}`,
    options
  );
  const data = await response.json();

  return data.results.map((d, idx) => ({
    ...d,
    imgURL: photos[idx],
  }));
};
