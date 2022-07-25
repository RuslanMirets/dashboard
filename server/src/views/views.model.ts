import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { MovieModel } from 'src/movie/movie.model';

@Table({ tableName: 'Views', createdAt: 'created_at', updatedAt: 'updated_at' })
export class ViewsModel extends Model<ViewsModel> {
	@ForeignKey(() => MovieModel)
	@Column({ field: 'movie_id' })
	movieId: number;

	@Column({ defaultValue: 0 })
	views: number;
}
