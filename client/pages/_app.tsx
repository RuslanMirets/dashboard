import type { AppProps } from 'next/app';
import AuthProvider from '@/providers/auth-provider/AuthProvider';
import '@/assets/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default App;
