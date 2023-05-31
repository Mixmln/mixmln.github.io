import createDataContext from './createDataContext';
import projects from '../data/projects';

const reducer = (state, action) => {
	switch (action.type) {
		case 'filter_projects':
			return {
				...state,
				projects: action.payload.projects,
				activeButton: action.payload.activeButton,
			};
		default:
			break;
	}
};

const filterProjects = (dispatch) => (category) => {
	if (category !== 'all') {
		const filteredProjects = projects.filter(
			(project) => project.category === category
		);
		dispatch({
			type: 'filter_projects',
			payload: { projects: filteredProjects, activeButton: category },
		});
		return;
	}
	dispatch({
		type: 'filter_projects',
		payload: { projects: projects, activeButton: 'all' },
	});
};

export const { Provider, Context } = createDataContext(
	// Reducer
	reducer,
	// Actions
	{ filterProjects },
	// InitialStates
	{
		activeButton: 'all',
		projects: projects,
	}
);
