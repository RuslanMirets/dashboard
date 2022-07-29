import interceptor, { axiosClassic } from '@/api/interceptor';
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
		return interceptor.post<string>('/movie');
	},

	async update(id: number, dto: IMovieDto) {
		return interceptor.put<IMovie>(`/movie/${id}`, dto);
	},

	async delete(id: number) {
		return interceptor.delete<IMovie>(`/movie/${id}`);
	},
};
