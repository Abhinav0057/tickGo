import apiClient from '../../http-common';
import { useQuery } from 'react-query';

export const useHome = () => {
	//All Logic Here

	// const {
	// 	isLoading: isLoadingProducts,
	// 	refetch: getAllProducts,
	// 	data: dataProducts,
	// 	error: errorProducts,
	// 	isSuccess: isSuccessProducts,
	// 	isError: isErrorProducts,
	// } = useQuery('product-tutorials', async () => {
	// 	return await apiClient.get('/event');
	// });

	//Fetching, filtering, etc etc
	// here we notmally return the data from the data from the api call of ues query fetcher

	// an event will trigger this function call

	// function mygetAllProducts() {
	// 	try {
	// 		getAllProducts();
	// 	} catch (err) {
	// 		//   setGetResult(fortmatResponse(err));
	// 	}
	// }

	// return {
	// 	isLoading: isLoadingProducts,
	// 	refetch: getAllProducts,
	// 	data: dataProducts,
	// 	error: errorProducts,
	// 	isSuccess: isSuccessProducts,
	// 	isError: isErrorProducts,
	// };
	return {};
};
