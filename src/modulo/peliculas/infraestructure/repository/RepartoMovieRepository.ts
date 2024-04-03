import axios, { AxiosResponse } from "axios";
import { RepartoMovieResponse } from "../../domain";
import { stringify } from "qs";

const API_BASE_URL: string="https://api.themoviedb.org/3"

export const repartoPeliculas = async (idMovie,tipo,credito)
: Promise<RepartoMovieResponse[]> => {
	const language= 'es-ES';
    const queryString:string = stringify({ language });
	const response: AxiosResponse<RepartoMovieResponse[]> = await axios.get(
		`${API_BASE_URL}/${tipo}/${idMovie}/${credito}?${queryString}&api_key=a66c1a2963df75c69ccc628ee519e855`,
	);
	return response.data;
};