import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { LISTAR_MOVIES_MULTI, LISTAR_SERIES_POPULAR } from "./QueryKeys";
import { MultiSearchRepository } from "../infraestructure";
import { MediaResponse } from "../domain";

const useSearchMulti =  (page,query): UseQueryResult<MediaResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_MOVIES_MULTI,page,query],
		queryFn: async () => await MultiSearchRepository.buscarPeliculas(query,page),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useSearchMulti;