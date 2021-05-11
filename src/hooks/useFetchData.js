import { useEffect, useCallback } from 'react';
import { useAppContext } from '../context/context';
import { mergeArrays } from '../utils/mergeArr';
import axios from 'axios';

export default function useFetchData({ url, options = { disable: false } }) {
  const [{ products, favoriteProducts }, dispatch] = useAppContext();
  const isDisabled = options.disable;

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
      dispatch({
        type: 'ERROR',
        payload: 'Oops, something went wrong! Try again later...!',
      });
    }
  }, [url, dispatch, favoriteProducts]);

  useEffect(() => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    if (!isDisabled) {
      fetchData(url);
    } else {
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    }
  }, [url, dispatch, fetchData, isDisabled]);
  return products;
}
