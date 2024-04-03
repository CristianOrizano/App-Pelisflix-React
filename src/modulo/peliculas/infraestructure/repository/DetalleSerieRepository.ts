import axios, { AxiosResponse } from "axios";
import { stringify } from "qs";
import { DetalleSerieResponse } from "../../domain";


const API_BASE_URL: string="https://api.themoviedb.org/3"


export const  detalleSerie= async (id)
: Promise<DetalleSerieResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language });
	const response: AxiosResponse<DetalleSerieResponse[]> = await axios.get(
		`${API_BASE_URL}/tv/${id}?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};