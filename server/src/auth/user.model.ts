import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ReviewModel } from 'src/review/review.model';

@Table({
	tableName: 'User',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	defaultScope: { attributes: { exclude: ['password'] } },
})
export class UserModel extends Model<UserModel, UserModel> {
	@Column
	name: string;

	@Column({ unique: true })
	email: string;

	@Column
	password: string;

	@Column({ field: 'avatar_path' })
	avatarPath: string;

	@HasMany(() => ReviewModel)
	reviews: ReviewModel[];
}
