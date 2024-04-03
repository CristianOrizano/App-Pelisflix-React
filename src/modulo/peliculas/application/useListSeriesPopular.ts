import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { LISTAR_SERIES_POPULAR } from "./QueryKeys";
import { SeriePopularRepository } from "../infraestructure";
import { TVShowsResponse } from "../domain";

const useListSeriesPopular =  (page): UseQueryResult<TVShowsResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_SERIES_POPULAR,page],
		queryFn: async () => await SeriePopularRepository.listarSeries(page),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useListSeriesPopular;