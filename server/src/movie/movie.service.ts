import { UserModel } from 'src/auth/user.model';
import { ReviewModel } from 'src/review/review.model';
import { MovieDto } from './movie.dto';
import { MovieModel } from 'src/movie/movie.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, WhereOptions } from 'sequelize';

@Injectable()
export class MovieService {
	constructor(
		@InjectModel(MovieModel) private readonly movieModel: typeof MovieModel,
	) {}

	async findOneById(id: number) {
		const movie = await this.movieModel.findOne({
			where: { id },
			include: {
				model: ReviewModel,
				include: [UserModel],
			},
		});
		if (!movie) throw new NotFoundException('Movie not found');

		return movie;
	}

	async findAll(searchTerm?: string) {
		let options: WhereOptions<MovieModel> = {};

		if (searchTerm)
			options = { [Op.or]: [{ name: { like: `%${searchTerm}%` } }] };

		return this.movieModel.findAll({
			where: { ...options },
			order: [['created_at', 'desc']],
			include: { all: true },
		});
	}

	async create() {
		const movie = await this.movieModel.create();
		return movie.id;
	}

	async update(id: number, dto: MovieDto) {
		const movie = await this.findOneById(id);
		return movie.update({ ...movie, ...dto });
	}

	async delete(id: number) {
		return await this.movieModel.destroy({ where: { id } });
	}
}
