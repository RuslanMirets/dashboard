import cn from 'classnames';
import { FC } from 'react';
import styles from './StatisticItem.module.scss';
import { IStatisticItem } from './statistic-item.interface';

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	return (
		<div className={cn(styles.item, styles[item.color])}>
			<div className={styles.icon}>
				<item.Icon />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>{item.value.toLocaleString('ru-RU')}</div>
		</div>
	);
};

export default StatisticItem;