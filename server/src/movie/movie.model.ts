import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ReviewModel } from 'src/review/review.model';

@Table({ tableName: 'Movie', createdAt: 'created_at', updatedAt: 'updated_at' })
export class MovieModel extends Model {
	@Column({ unique: true })
	name: string;

	@Column({ allowNull: true })
	rating: number;

	@Column({ defaultValue: '' })
	poster: string;

	@Column({ defaultValue: 0 })
	fees: number;

	@HasMany(() => ReviewModel)
	reviews: ReviewModel[];
}
