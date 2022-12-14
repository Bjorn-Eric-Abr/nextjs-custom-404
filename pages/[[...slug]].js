import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ params }) {
	console.log('params::', params)

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Main page</h1>
				<pre className={styles.pre}>
					Slug params: <br />
					<br />
					{JSON.stringify(params.slug, null, 3)}
				</pre>
			</main>
		</div>
	)
}

export function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: [] } },
			{ params: { slug: ['main'] } },
			{ params: { slug: ['se', 'main'] } },
		],
		fallback: false,
	}
}

export function getStaticProps({ params }) {
	return {
		props: {
			params,
		},
	}
}
