import { useEffect, useCallback } from 'react';
import { useAppContext } from '../context/context';
import axios from 'axios';

export default function useFetchData() {
  const [{ products }, dispatch] = useAppContext();
  let url = 'https://fakestoreapi.com/products';

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      const finalData = data.map((el) => {
        return {
          ...el,
          amount: 1,
        };
      });
      dispatch({
        type: 'DISPLAY_PRODUCTS',
        payload: finalData,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch({
      type: 'LOADING',
    });
    fetchData();
  }, [dispatch]);
  return products;
}
