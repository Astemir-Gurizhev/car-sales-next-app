import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'
import Header from './header/Header'

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
	ssr: false,
})

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			{children}
			<DynamicFooter />
		</Meta>
	)
}

export default Layout
