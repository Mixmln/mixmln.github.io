/* eslint-disable react/prop-types */

import { AiOutlineGithub } from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';

function PorjectCard({ project }) {
	const {
		title,
		description,
		technologies,
		githubLink,
		demoUrl,
		img,

		secondClassName,
	} = project;

	const visitDemo = (url) => {
		window.open(url, '_blank');
	};

	return (
		<div
			className='project__card'
			// style={{
			// 	flexDirection: reverse ? 'row-reverse' : 'row',
			// }}
		>
			<div className='project__image'>
				<img
					className={`${secondClassName}`}
					src={img}
					alt='project-hero'
				/>
			</div>
			<div className='project__description'>
				<h5>{title}</h5>
				<p className='projext-text'>{description}</p>
				<div className='project__technologies'>
					{technologies.map((technology, i) => (
						<div
							className='technology__card'
							key={i}
						>
							<p>{technology}</p>
						</div>
					))}
				</div>
				<div className='project__links'>
					{githubLink ? (
						<div
							className='clickable-link'
							onClick={() => visitDemo(githubLink)}
						>
							<p>Code</p>
							<AiOutlineGithub size={30} />
						</div>
					) : (
						''
					)}

					<div
						className='clickable-link'
						onClick={() => visitDemo(demoUrl)}
					>
						<p>Live Demo</p>
						<BsBoxArrowInRight size={30} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PorjectCard;
