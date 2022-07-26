import { ReviewDto } from './review.dto';
import { ReviewModel } from './review.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel) private readonly reviewModel: typeof ReviewModel,
	) {}

	async create(userId: number, dto: ReviewDto) {
		return this.reviewModel.create({ userId, ...dto });
	}
}
