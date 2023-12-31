import '@/styles/global/globals.css';
import utilStyles from '@/styles/utils/utils.module.scss';
import styles from './posts/postsLayout.module.scss';

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});
const name: string = 'Yevhen';

export const metadata: Metadata = {
	title: 'Main page Next.js',
	description: 'Generated by create next app',
};

const headerClasses: string = clsx(styles.header, utilStyles.heading2Xl);

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header className={headerClasses}>
					Content was delivered by Next.js
				</header>
				<div style={{textAlign: 'center'}}>
					<Link href='/'>
						<Image
							priority
							src='/image/Me.jpg'
							className={utilStyles.borderCircle}
							height={208}
							width={208}
							alt='My photo'
						/>
					</Link>
					<h2 className={utilStyles.headingLg}>
						<Link href='/' className={utilStyles.colorInherit}>
							{name}
						</Link>
					</h2>
				</div>

				{children}
			</body>
		</html>
	);
}
