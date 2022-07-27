import axios, { axiosClassic } from '@/api/interceptor';
import { IMovie, IMovieDto } from '@/shared/interfaces/movie.interface';

export const MovieService = {
	async getOneById(id: number) {
		return axiosClassic.get<IMovie>(`/movie/${id}`);
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>('/movie', {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async create() {
		return axios.post<string>('/movie');
	},

	async update(id: number, dto: IMovieDto) {
		return axios.put<IMovie>(`/movie/${id}`, dto);
	},

	async delete(id: number) {
		return axios.delete<IMovie>(`/movie/${id}`);
	},
};
