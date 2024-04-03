import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { MoviePopularRepository } from "../infraestructure";
import { LISTAR_PELICULAS_POPULAR } from "./QueryKeys";
import { MoviesResponse } from "../domain";


const useListMoviesPopular =  (page): UseQueryResult<MoviesResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_PELICULAS_POPULAR,page],
		queryFn: async () => await MoviePopularRepository.listarMovies(page),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useListMoviesPopular;