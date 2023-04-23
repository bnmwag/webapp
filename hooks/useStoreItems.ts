import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useStoreItems = (itemId?: string) => {
	const url = itemId ? `/api/storeItems?itemId=${itemId}` : '/api/storeItems';

	const { data, error, isLoading, mutate } = useSWR(url, fetcher);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useStoreItems;
