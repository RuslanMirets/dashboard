import instance, { axiosClassic } from '@/api/interceptor';
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
		return instance.post<string>('/movie');
	},

	async update(id: number, dto: IMovieDto) {
		return instance.put<IMovie>(`/movie/${id}`, dto);
	},

	async delete(id: number) {
		return instance.delete<IMovie>(`/movie/${id}`);
	},
};
