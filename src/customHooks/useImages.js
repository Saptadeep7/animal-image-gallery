import useSWR from 'swr';
import { API_URL, IMAGE_PER_PAGE } from '../constants';
const useImages = (queryFilter) => {
  const URL = `${API_URL}?query=${queryFilter}&per_page=${IMAGE_PER_PAGE}&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((res) => res.results);
  const { data, error } = useSWR(URL, fetcher, { suspense: true });
  return {
    images: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useImages;
