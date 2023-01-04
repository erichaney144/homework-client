import Head from 'next/head'
import { ReactNode } from 'react'
import { User } from '../interfaces'
import Navbar from './Navbar'

type Props = {
	children?: ReactNode
	title?: string
	user: User
	setUser: Function
}

const Layout = ({ children, title = 'Store', user, setUser }: Props) => (
	<div className='p-4'>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, shrink-to-fit=no'
			/>
		</Head>
		<header>
			<Navbar user={user} setUser={setUser}></Navbar>
		</header>
		{children}
		<footer>
			<hr />
			<span>** a homework assignment for Symetra, written by Eric Haney</span>
		</footer>
	</div>
)

export default Layout
