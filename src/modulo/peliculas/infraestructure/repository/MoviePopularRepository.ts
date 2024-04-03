import axios, { AxiosResponse } from "axios";
import { MoviesResponse } from "../../domain";
import { stringify } from "qs";

const API_BASE_URL: string="https://api.themoviedb.org/3"


export const listarMovies = async (page)
: Promise<MoviesResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language, page });
	const response: AxiosResponse<MoviesResponse[]> = await axios.get(
		`${API_BASE_URL}/movie/popular?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};
