import {getAllPostIds, getPostData} from '../../../../lib/posts';
import Date from '@/components/date/modificateDate.tsx';

import Link from 'next/link';
import {Metadata} from 'next';

import utilStyles from '@/styles/utils/utils.module.scss';

type Props = {
	params: {id: string};
	searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const id = params.id;

	const product = await getPostData(id);

	return {
		title: product.title,
	};
}

export default async function Post({params}: Props) {
	const postInform: {
		id: string;
		title: string;
		date: string;
		content: string;
	} = await getPostData(params.id);

	return (
		<div style={{textAlign: 'left', color: '#999', fontWeight: '900'}}>
			<article className={utilStyles.headingMd}>
				<h1 className={utilStyles.headingXl}>{postInform.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postInform.date} />
				</div>
				<div dangerouslySetInnerHTML={{__html: postInform.content}} />
			</article>
			<Link
				href='/'
				style={{backgroundColor: 'green', padding: 10, color: '#FFF'}}
			>
				Main page
			</Link>
		</div>
	);
}

export async function generateStaticParams() {
	const posts = getAllPostIds();

	return posts.map((post) => ({
		id: post.id,
	}));
}
