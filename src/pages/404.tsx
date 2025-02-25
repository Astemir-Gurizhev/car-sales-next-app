import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'

const NotFound = () => {
	return (
		<Layout>
			<Head>
				<title>Not Found</title>
			</Head>
			<div style={{ textAlign: 'center' }}>
				<Image src='/404.png' alt='' width={300} height={300}></Image>
			</div>
		</Layout>
	)
}

export default NotFound
