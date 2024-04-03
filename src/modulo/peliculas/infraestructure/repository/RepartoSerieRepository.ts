import { stringify } from "qs";
import { RepartoSerieResponse } from "../../domain";
import axios, { AxiosResponse } from "axios";

const API_BASE_URL: string="https://api.themoviedb.org/3"

export const repartoPeliculas = async (idSerie)
: Promise<RepartoSerieResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language });
	const response: AxiosResponse<RepartoSerieResponse[]> = await axios.get(
		`${API_BASE_URL}/tv/${idSerie}/aggregate_credits?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};