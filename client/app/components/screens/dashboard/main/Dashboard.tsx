import { FC } from 'react';
import Layout from '@/components/ui/layout/Layout';
import MainStatistics from './main-statistics/MainStatistics';

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<MainStatistics />
		</Layout>
	);
};

export default Dashboard;
