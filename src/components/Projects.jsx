import '../css/projects.css';
import PorjectCard from './PorjectCard';
import ProjectCategoryButton from './ProjectCategoryButton';
import { useContext } from 'react';
import { Context } from '../context/MainContext';

function Projects() {
	const { state } = useContext(Context);

	const { projects } = state;

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
				<div className='project-category'>
					<ProjectCategoryButton title='All Projects' />
					<ProjectCategoryButton title='Fun Projects' />
					<ProjectCategoryButton title='Real Projects' />
				</div>
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
