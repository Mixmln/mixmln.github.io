import '../css/about.css';
import code from '../assets/code.png';
import circle from '../assets/circle.svg';
import { IoIosLaptop } from 'react-icons/io';

function About() {
	return (
		<div
			className='about-container'
			id='about'
		>
			<div className='about'>
				<div className='code-snippet'>
					<img
						className='code-snippet__img'
						src={code}
						alt='code'
					/>
					<div className='rotating-text'>
						<IoIosLaptop
							className='icon'
							size={65}
							color='orange'
						/>
						<img
							className='curved-text'
							src={circle}
							alt='circle'
						/>
					</div>
				</div>
				<div className='about__content'>
					<h4>ABOUT ME</h4>
					<h5>A dedicated Front-end Developer based in Vilnius, Lithuania </h5>
					<div className='about__text'>
						<p className='part-1'>
							I am a Junior Front End Developer with a passion for creating
							beautiful and responsive web applications. My main tech stack
							includes React, SASS, and TailwindCSS, which I use to build modern
							and dynamic user interfaces. In addition to this, I am currently
							completing courses in React Native on Udemy, which will allow me
							to expand my skillset even further. While my primary focus is
							front-end development, I am also keenly interested in back-end
							technologies such as Node.js and PHP.
						</p>
						<p className='part-2'>
							Although I do not yet have extensive experience in these areas, I
							am eager to learn more and expand my skillset. I believe that
							having a good understanding of both front-end and back-end
							technologies is essential to building scalable and efficient web
							applications. As a result, I am always looking for opportunities
							to broaden my knowledge and stay up-to-date with the latest trends
							in web development. Currently, I am working as a freelance
							developer with a team of 4 people, where I have completed several
							web projects. This experience has allowed me to gain valuable
							insights into the collaborative aspects of web development, as
							well as hone my skills as a developer.
						</p>
						<p className='part-3'>
							However, I have a great desire to work in a big team on big
							projects, where I can contribute to and learn from a talented
							group of professionals. In summary, I am a motivated and dedicated
							developer with a passion for technology and a drive for skill
							growth. I believe that my experience, coupled with my desire to
							learn, will make me a valuable addition to any team.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
