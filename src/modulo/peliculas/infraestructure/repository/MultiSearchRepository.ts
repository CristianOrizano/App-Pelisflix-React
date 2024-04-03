import axios, { AxiosResponse } from "axios";
import { MediaResponse } from "../../domain";
import { stringify } from "qs";

const API_BASE_URL: string="https://api.themoviedb.org/3"

export const buscarPeliculas = async (query,page)
: Promise<MediaResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language, query,page });
	const response: AxiosResponse<MediaResponse[]> = await axios.get(
		`${API_BASE_URL}/search/multi?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};