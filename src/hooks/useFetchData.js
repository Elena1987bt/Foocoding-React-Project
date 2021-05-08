// import { useEffect, useCallback } from 'react';
// import { useAppContext } from '../context/context';
// import { mergeArrays } from '../utils/mergeArr';
// import axios from 'axios';

// export default function useFetchData(url) {
//   const [{ products, product, favoriteProducts }, dispatch] = useAppContext();
//   const fetchData = useCallback(async () => {
//     try {
//       const res = await axios.get(url);
//       const data = await res.data;
//       url === 'https://fakestoreapi.com/products' ? fetchAll(data) : fetchSingleProduct(data);
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: 'ERROR',
//       });
//     }
//     function fetchAll(data) {
//       const basicData = data.map((el) => {
//         return {
//           ...el,
//           amount: 1,
//           isFavorite: false,
//         };
//       });
//       const finalData = mergeArrays(basicData, favoriteProducts);
//       dispatch({
//         type: 'DISPLAY_PRODUCTS',
//         payload: finalData,
//       });
//     }

//     function fetchSingleProduct(data) {
//       const finalData = {
//         ...data,
//         amount: 1,
//         isFavorite: false,
//       };

//       dispatch({
//         type: 'SET_PRODUCT',
//         payload: finalData,
//       });
//     }
//   }, [dispatch, url]);

//   useEffect(() => {
//     dispatch({
//       type: 'LOADING',
//     });
//     fetchData();
//   }, [fetchData, dispatch]);

//   return { products, product };
// }
