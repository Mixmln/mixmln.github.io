import zoomarket from '../assets/zoomarket.png';
import projectmini from '../assets/projectmini.png';
import remodal from '../assets/remodal.png';
import webprojects from '../assets/webprojects.png';
import pokedex from '../assets/pokedex.png';

const projects = [
	{
		title: 'Zoo Market',
		description:
			'Family run pet store providing food, hygiene products and accessories for local community',
		technologies: ['React', 'MaterialUI'],
		githubLink: null,
		demoUrl: 'https://www.zoomarket.lt',
		img: zoomarket,
		reverse: false,
		category: 'real',
		secondClassName: 'minus73',
	},
	{
		title: 'Project Mini',
		description:
			'Construction business developer & manufacturer of modular houses and recreational structures',
		technologies: ['React', 'TailwindCSS'],
		githubLink: null,
		demoUrl: 'https://www.projectmini.lt',
		img: projectmini,
		reverse: true,
		category: 'real',
		secondClassName: 'minus79',
	},
	{
		title: 'Remodal',
		description:
			'Self promotional agency designing, developing, hosting and maintaining website, software & mobile application projects',
		technologies: ['React', 'Vanilla CSS'],
		githubLink: null,
		demoUrl: 'https://www.remodal.lt',
		img: remodal,
		reverse: false,
		category: 'real',
		secondClassName: 'minus78',
	},
	{
		title: 'Web Projects',
		description:
			'Self promotional agency designing, developing, hosting and maintaining website, software & mobile application projects',
		technologies: ['React', 'SCSS'],
		githubLink: null,
		demoUrl: 'http://webprojects.lt',
		img: webprojects,
		reverse: true,
		category: 'real',
		secondClassName: 'minus55',
	},
	{
		title: 'Pokédex',
		description:
			'Experience a hilarious twist on the traditional Pokédex with our web project that showcases wacky and whimsical descriptions of every Pokémon, guaranteed to make you laugh out loud!',
		technologies: ['React', 'SCSS'],
		githubLink: 'https://github.com/arturjanuska/pokedex',
		demoUrl: 'https://portfolio-work-pokedex.netlify.app',
		img: pokedex,
		reverse: false,
		category: 'fun',
		secondClassName: 'minus17',
	},
];

export default projects;
