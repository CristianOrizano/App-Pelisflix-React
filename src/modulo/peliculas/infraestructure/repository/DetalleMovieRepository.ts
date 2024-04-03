import axios, { AxiosResponse } from "axios";
import { stringify } from "qs";
import { DetalleResponse } from "../../domain";


const API_BASE_URL: string="https://api.themoviedb.org/3"


export const  detallePelicula= async (id,tipo)
: Promise<DetalleResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language });
	const response: AxiosResponse<DetalleResponse[]> = await axios.get(
		`${API_BASE_URL}/${tipo}/${id}?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};