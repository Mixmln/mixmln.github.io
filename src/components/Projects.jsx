import '../css/projects.css';
import zoomarket from '../assets/zoomarket.png';
import projectmini from '../assets/projectmini.png';
import remodal from '../assets/remodal.png';
import PorjectCard from './PorjectCard';

function Projects() {
	const projects = [
		{
			title: 'Zoo Market',
			description:
				'Family run pet store providing food, hygiene products and accessories for local community',
			technologies: ['React', 'MaterialUI'],
			githubLink: '',
			demoUrl: 'https://www.zoomarket.lt',
			img: zoomarket,
			reverse: false,
		},
		{
			title: 'Project Mini',
			description:
				'Construction business developer & manufacturer of modular houses and recreational structures',
			technologies: ['React', 'TailwindCSS'],
			githubLink: '',
			demoUrl: 'https://www.projectmini.lt',
			img: projectmini,
			reverse: true,
		},
		{
			title: 'Remodal',
			description:
				'Self promotional agency designing, developing, hosting and maintaining website, software & mobile application projects',
			technologies: ['React', 'Vanilla CSS'],
			githubLink: '',
			demoUrl: 'https://www.remodal.lt',
			img: remodal,
			reverse: false,
		},
	];

	return (
		<div
			className='projects-container'
			id='projects'
		>
			<div className='portfolio'>
				<h4 className='portfolio-title'>PORTFOLIO</h4>
				<p className='portfolio-subtitle'>
					Each project is a unique piece of development
				</p>
				<div className='portfolio__projects'>
					{projects.map((project, i) => (
						<PorjectCard
							project={project}
							key={i}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
