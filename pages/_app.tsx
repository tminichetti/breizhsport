import '@/lib/extensionMethods/number';
import '@/lib/extensionMethods/string';

function MyApp({
	Component,
	pageProps,
}: {
	Component: React.ComponentType<any>;
	pageProps: any;
}) {
	return <Component {...pageProps} />;
}

export default MyApp;

