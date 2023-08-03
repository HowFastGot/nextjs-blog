import Link from 'next/link';

export default function Shop() {
	return (
		<>
			<ul>
				Trousers list size:
				<li>51</li>
				<li>52</li>
				<li>53</li>
				<li>54</li>
				<li>55</li>
			</ul>
			<br />
			<br />
			<br />
			<br />
			<Link
				href='/'
				style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}
			>
				Main page
			</Link>
		</>
	);
}
