import '../css/hero.css';
import hand from '../assets/hand.png';
import Css from '../assets/css-3.png';
import Html5 from '../assets/html.png';
import Javascript from '../assets/js.png';
import ReactJs from '../assets/react.png';
import Sass from '../assets/sass.png';
import TailwindCss from '../assets/tailwindcss.png';
import nodejs from '../assets/node.png';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Hero() {
	const stackImages = [
		{
			icon: Html5,
			title: 'HTML5',
		},

		{
			icon: Css,
			title: 'CSS',
		},
		{
			icon: Javascript,
			title: 'Javascript',
		},
		{
			icon: ReactJs,
			title: 'ReactJS/React Native',
		},
		{
			icon: Sass,
			title: 'SASS',
		},
		{
			icon: TailwindCss,
			title: 'TailwindCSS',
		},
		{
			icon: nodejs,
			title: 'NodeJS',
		},
	];

	const visitSocial = (url) => {
		window.open(url, '_blank');
	};

	return (
		<div
			className='hero-container'
			id='hero'
		>
			<div className='hero'>
				<div className='top__side'>
					<div className='hero__content'>
						<h2>
							Front-end React Developer
							<span>
								<img
									className='hand'
									src={hand}
									alt='hand'
								/>
							</span>
						</h2>
						<p>
							Hi, {"I'm"} Artur. A passionate Front-end React Developer based in
							Vilnius, Lithuania.
						</p>
						<div className='links'>
							<FaGithubSquare
								size={35}
								onClick={() => visitSocial('https://github.com/Mixmln')}
							/>
							<FaLinkedin
								size={35}
								onClick={() =>
									visitSocial(
										'https://www.linkedin.com/in/artur-januska-11449a258/'
									)
								}
							/>
						</div>
					</div>
					<div className='animation-container'>
						<div className='hero__animation'></div>
					</div>
				</div>
				<div className='hero__stack'>
					<h3>Tech Stack</h3>
					<div className='division'></div>
					<div className='technologies'>
						{stackImages.map((icon, i) => (
							<div
								key={i}
								className='icon-container'
							>
								<img
									title={icon.title}
									src={icon.icon}
									alt='icon'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
