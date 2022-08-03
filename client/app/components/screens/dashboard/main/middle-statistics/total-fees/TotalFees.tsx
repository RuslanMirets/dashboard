import { FC } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';
import ProgressBar from '@/components/ui/progress-bar/ProgressBar';
import styles from './TotalFees.module.scss';

const TotalFees: FC<{ total: number }> = ({ total }) => {
	return (
		<div className={styles.fees}>
			<ProgressBar percent={75} />
			<div className={styles.icon}>
				<MdOutlineQueryStats />
			</div>
			<div className={styles.name}>Total fees</div>
			<div className={styles.total}>${total.toLocaleString('en-EN')}</div>
		</div>
	);
};

export default TotalFees;
