import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useStoreItems = (userId?: string) => {
	const url = userId ? `/api/storeItems?userId=${userId}` : '/api/storeItems';

	const { data, error, isLoading, mutate } = useSWR(url, fetcher);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useStoreItems;
