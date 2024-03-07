import React from 'react';
import MainNav from '@/components/main-nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import StoreProvider from './StoreProvider';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Breizhsport',
		template: `%s - Breizhsport`,
	},
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<StoreProvider>
						<MainNav />
						<main className="container">{children}</main>
						<TailwindIndicator />
					</StoreProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

