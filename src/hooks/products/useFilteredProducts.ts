import { useQuery } from '@tanstack/react-query';
import { getFilteredProducts } from '../../actions';

export const useFilteredProducts = ({
	page,
	material,
}: {
	page: number;
	material: string[];
}) => {
	const { data, isLoading } = useQuery({
		queryKey: ['filteredProducts', page, material],
		queryFn: () => getFilteredProducts({ page, material }),
		retry: false,
	});

	return {
		data: data?.data,
		isLoading,
		totalProducts: data?.count ?? 0,
	};
};