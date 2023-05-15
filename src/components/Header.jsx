import { useEffect, useState } from 'react';
import '../css/header.css';

function Header() {
	const [scrollTop, setScrollTop] = useState(0);
	const [burgerTrigger, setBurgerTrigger] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToSection = (id) => {
		const section = document.querySelector(`#${id}`);

		window.scrollTo({
			behavior: 'smooth',
			top: section.offsetTop,
		});
	};

	return (
		<div
			className='header-container'
			style={{
				backgroundColor: scrollTop === 0 ? 'white' : 'transparent',
				height: scrollTop === 0 ? '65px' : '50px',
				boxShadow:
					scrollTop === 0
						? '0px 2px 10px 0px #00000024'
						: '0px 1px 4px 0px #0000002e',
			}}
		>
			<div className='header-content'>
				<h1>Artur.dev</h1>

				<div className='burger-menu'>
					<div
						className='burger'
						onClick={() => setBurgerTrigger(!burgerTrigger)}
					>
						<div
							className={`bar bar-1 ${burgerTrigger ? 'left-bar' : ''}`}
						></div>
						<div
							className={`bar bar-2 ${burgerTrigger ? 'right-bar' : ''}`}
						></div>
						<div
							className={`bar bar-2 ${burgerTrigger ? 'hidden-bar' : ''}`}
						></div>
					</div>
					<div className={`burger-menu-content ${burgerTrigger ? 'open' : ''}`}>
						<ul>
							<li
								onClick={() => {
									scrollToSection('hero');
									setBurgerTrigger(false);
								}}
							>
								Home
							</li>

							<li
								onClick={() => {
									scrollToSection('about');
									setBurgerTrigger(false);
								}}
							>
								About
							</li>
							<li
								onClick={() => {
									scrollToSection('projects');
									setBurgerTrigger(false);
								}}
							>
								Projects
							</li>
							<li
								onClick={() => {
									scrollToSection('contact');
									setBurgerTrigger(false);
								}}
							>
								Contact
							</li>
						</ul>
					</div>
				</div>

				<div className='desctop-nav'>
					<ul>
						<li onClick={() => scrollToSection('hero')}>Home</li>
						<li onClick={() => scrollToSection('about')}>About</li>
						<li onClick={() => scrollToSection('projects')}>Projects</li>
						<li onClick={() => scrollToSection('contact')}>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
