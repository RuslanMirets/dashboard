import { IStatisticItem } from '@/components/ui/statistic-item/statistic-item.interface';
import instance from '@/api/interceptor';
import { IMiddleStatisticsResponse } from './statistics.interface';

export const StatisticsService = {
	async getMain() {
		return instance
			.get<IStatisticItem[]>('/statistics/main')
			.then(({ data }) => data);
	},
	async getMiddle() {
		return instance
			.get<IMiddleStatisticsResponse>('/statistics/middle')
			.then(({ data }) => data);
	},
};
