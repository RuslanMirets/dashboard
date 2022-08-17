import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { IViewsByMonth } from '@/services/statistics/statistics.interface';
import styles from './ViewsChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
	responsive: true,
};

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => 1000),
			backgroundColor: '#7a94fe',
		},
	],
};

const ViewsChart: FC<{ data: IViewsByMonth[] }> = () => {
	return (
		<div className={styles.chart}>
			<Bar options={options} data={data} />
		</div>
	);
};

export default ViewsChart;
