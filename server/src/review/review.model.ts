import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { MovieModel } from 'src/movie/movie.model';
import { UserModel } from 'src/auth/user.model';

@Table({
	tableName: 'Review',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
export class ReviewModel extends Model<ReviewModel> {
	@Column({ defaultValue: '' })
	description: string;

	@ForeignKey(() => UserModel)
	@Column({ field: 'user_id' })
	userId: number;

	@BelongsTo(() => UserModel)
	user: UserModel;

	@ForeignKey(() => MovieModel)
	@Column({ field: 'movie_id' })
	movieId: number;

	@BelongsTo(() => MovieModel)
	movie: MovieModel;
}
