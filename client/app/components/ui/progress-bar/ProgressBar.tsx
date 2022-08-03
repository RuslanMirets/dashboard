import { FC } from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	return (
		<div className={styles.progress}>
			<div className={styles.overflow}>
				<div
					className={styles.bar}
					style={{ transform: `rotate(${45 + percent * 1.8}deg)` }}
				/>
			</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	);
};

export default ProgressBar;
