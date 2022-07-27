import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useState,
} from 'react';
import { AuthService } from '@/services/auth/auth.service';
import { IContext, TypeUserState } from './auth.interface';

export const AuthContext = createContext({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '');
			setUser(user);
		}
	}, []);

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (!accessToken && !user) {
			AuthService.logout();
			setUser(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
