import instance from '@/api/interceptor';
import { IReview, IReviewDto } from '@/shared/interfaces/review.interface';

export const ReviewService = {
	async create(dto: IReviewDto) {
		return instance.post<IReview>(`/review`, dto);
	},
};
