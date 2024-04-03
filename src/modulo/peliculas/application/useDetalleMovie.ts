import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { LISTAR_DETALLES_MOVIE } from "./QueryKeys";
import { DetalleMovieRepository } from "../infraestructure";
import { DetalleResponse } from "../domain";


const useDetalleMovie =  (id,tipo): UseQueryResult<DetalleResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_DETALLES_MOVIE,id,tipo],
		queryFn: async () => await DetalleMovieRepository.detallePelicula(id,tipo),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useDetalleMovie;