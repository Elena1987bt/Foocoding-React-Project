import { useEffect, useCallback } from 'react';
import { useAppContext } from '../context/context';
import { mergeArrays } from '../utils/mergeArr';
import axios from 'axios';

export default function useFetchData(url) {
  const [{ products, favoriteProducts }, dispatch] = useAppContext();

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      const basicData = data.map((el) => {
        return {
          ...el,
          amount: 1,
          isFavorite: false,
        };
      });
      const finalData = mergeArrays(basicData, favoriteProducts);
      dispatch({
        type: 'DISPLAY_PRODUCTS',
        payload: finalData,
      });
    } catch (err) {
      console.log(err);
    }
  }, [url, dispatch]);
  useEffect(() => {
    dispatch({
      type: 'LOADING',
    });

    fetchData();
  }, [dispatch, fetchData]);
  return products;
}
