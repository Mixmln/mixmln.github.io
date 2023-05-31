/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { Context } from '../context/MainContext';

function ProjectCategoryButton({ title }) {
	const { state, filterProjects } = useContext(Context);

	const splitedTitle = title.split(' ');
	const firstTitleWordLowerCased = splitedTitle[0].toLowerCase();

	const { activeButton } = state;

	return (
		<button
			className={`${
				firstTitleWordLowerCased === activeButton ? 'active-button' : ''
			}`}
			onClick={() => filterProjects(firstTitleWordLowerCased)}
		>
			{title}
		</button>
	);
}

export default ProjectCategoryButton;
