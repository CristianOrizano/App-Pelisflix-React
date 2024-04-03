import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { DetalleSerieRepository } from "../infraestructure";
import { LISTAR_DETALLES_SERIE } from "./QueryKeys";
import { DetalleSerieResponse } from "../domain";

const useDetalleSerie =  (id): UseQueryResult<DetalleSerieResponse[], Error> => {
	const response = useQuery({
		queryKey: [LISTAR_DETALLES_SERIE,id],
		queryFn: async () => await DetalleSerieRepository.detalleSerie(id),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	return response;
};

export default useDetalleSerie;