import axios, { AxiosResponse } from "axios";
import { TVShowsResponse } from "../../domain";
import { stringify } from "qs";

const API_BASE_URL: string="https://api.themoviedb.org/3"

export const listarSeries = async (page)
: Promise<TVShowsResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language, page });
	const response: AxiosResponse<TVShowsResponse[]> = await axios.get(
		`${API_BASE_URL}/tv/popular?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};