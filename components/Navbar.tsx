import Link from 'next/link'

const Navbar = ({ user, setUser }) => (
	<nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
		<div className='container-fluid'>
			<Link className='navbar-brand' href='/'>
				String Theory (a music store)<sup>**</sup>
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarText'
				aria-controls='navbarText'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarText'>
				<ul className='navbar-nav mb-2 mb-lg-0 ms-auto'>
					<li className='nav-item'>
						<Link className='nav-link' href='/'>
							Shop
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' href='/cart'>
							Cart
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							className='nav-link'
							href='#'
							data-bs-toggle='modal'
							data-bs-target={!user ? '#login-modal' : '#logout-modal'}
							onClick={() => {
								setUser(null)
							}}
						>
							{!user ? 'Login' : 'Logout'}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)
export default Navbar
