import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import { useRouter } from 'next/router'

const Header = () => {

	const {pathname} = useRouter()

	return (
		<header className={styles.header}>
			<Link className={pathname === '/' ? styles.active : ''} href={'/'}>
				Home 
			</Link>
			<Link href={'/about'}>
				About
			</Link>
		</header>
	)
}

export default Header