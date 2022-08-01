import cn from 'classnames';
import { FC } from 'react';
import styles from './StatisticItem.module.scss';
import { IStatisticItem } from './statistic-item.interface';
import { getIcon } from './statistics.util';

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	const Icon = getIcon(item.id);

	return (
		<div className={cn(styles.item, styles[`color_${item.id}`])}>
			<div className={styles.icon}>
				<Icon />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>{item.value.toLocaleString('ru-RU')}</div>
		</div>
	);
};

export default StatisticItem;
