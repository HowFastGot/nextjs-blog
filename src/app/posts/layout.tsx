import styles from './postsLayout.module.scss';

import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Posts page layout',
	description: 'Generated by create next app but in another file!',
	openGraph: {
		title: 'Next.js Sample Website',
		images: {
			url: `https://og-image.vercel.app/${encodeURI(
				'Next.js Sample Website'
			)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
			alt: 'Smth image',
			width: 200,
			height: 250,
		},
	},
	twitter: {
		card: 'summary_large_image',
	},
};

export default function PostsLayout({children}: {children: React.ReactNode}) {
	return <section className={styles.container}>{children}</section>;
}