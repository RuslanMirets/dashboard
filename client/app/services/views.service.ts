import { axiosClassic } from '@/api/interceptor';

export const ViewsService = {
	async updateViews(movieId: number) {
		return axiosClassic.patch(`/views/update/${movieId}`);
	},
};
