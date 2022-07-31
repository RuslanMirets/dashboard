import { FC } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Heading from '@/components/ui/heading/Heading';
import StatisticItem from '@/components/ui/statistic-item/StatisticItem';

const MainStatistics: FC = () => {
	return (
		<div>
			<Heading>Main Statistics</Heading>
			<div className='grid grid-cols-4 gap-8'>
				<StatisticItem
					item={{ name: 'Views', value: 2000000, Icon: AiOutlineEye }}
				/>
			</div>
		</div>
	);
};

export default MainStatistics;
