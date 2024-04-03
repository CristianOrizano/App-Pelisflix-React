import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { LISTAR_REPARTO_MOVIE } from "./QueryKeys";
import { RepartoMovieRepository } from "../infraestructure";
import { RepartoMovieResponse } from "../domain";


const useListRepartoMovie =  (idMovie,tipo,credito): UseQueryResult<RepartoMovieResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_REPARTO_MOVIE,idMovie],
		queryFn: async () => await RepartoMovieRepository.repartoPeliculas(idMovie,tipo,credito),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useListRepartoMovie;