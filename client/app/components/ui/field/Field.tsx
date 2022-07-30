import sn from 'classnames';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Field.module.scss';
import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, Icon, ...rest }, ref) => {
		return (
			<div
				className={classNames(styles.input, { [styles.withIcon]: !!Icon })}
				style={style}
			>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input type={type} ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
