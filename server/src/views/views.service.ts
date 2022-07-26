import { ViewsModel } from './views.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { fn, Op } from 'sequelize';
import * as dayjs from 'dayjs';

@Injectable()
export class ViewsService {
	constructor(
		@InjectModel(ViewsModel) private readonly viewsModel: typeof ViewsModel,
	) {}

	async updateViews(movieId: number) {
		const row = await this.viewsModel.findOne({
			where: {
				movieId,
				[Op.and]: [
					fn('EXTRACT(MONTH from "created_at") =', dayjs().get('month') + 1),
				],
			},
		});

		if (row) {
			return row.increment('views');
		}

		return this.viewsModel.create({ movieId });
	}
}
