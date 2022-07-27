import axios from '@/api/interceptor';
import { IReview, IReviewDto } from '@/shared/interfaces/review.interface';

export const ReviewService = {
	async create(dto: IReviewDto) {
		return axios.post<IReview>(`/review`, dto);
	},
};
