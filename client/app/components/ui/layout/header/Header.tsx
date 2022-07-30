import { FC } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';
import AuthForm from './auth-form/AuthForm';
import Search from './search/Search';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<AuthForm />
		</header>
	);
};

export default Header;
