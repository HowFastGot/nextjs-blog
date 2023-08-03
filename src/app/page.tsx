import styles from '@/styles/mainPage/page.module.css';
import utilStyles from '@/styles/utils/utils.module.scss';

import {getSortedPostsData, IPosts} from '../../lib/posts';
import Date from '@/components/date/modificateDate';

import Link from 'next/link';
import clsx from 'clsx';

async function getData() {
	return getSortedPostsData();
}

const listItemClasses = clsx();

export default async function Home({params}: {params: {id: string}}) {
	const allPostsData: IPosts[] = await getData();
	return (
		<main className={styles.main}>
			<nav
				style={{textAlign: 'center'}}
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<ul className={utilStyles.list}>
					{allPostsData.map(({id, date, title}) => (
						<li className={utilStyles.listItem} key={id}>
							<Link style={{color: 'blue'}} href={`/posts/${id}`}>
								{title}
							</Link>
							<br />
							<Date dateString={date} />
						</li>
					))}
				</ul>
				<br />
			</nav>
		</main>
	);
}
