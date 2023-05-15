import '../css/contact.css';
import { MdLocationPin } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaHandPointDown } from 'react-icons/fa';

function Contact() {
	const cards = [
		{
			icon: <MdLocationPin size={35} />,
			title: 'Location',
			content: 'Vilnius, Lithuania',
		},
		{
			icon: <SiGmail size={28} />,
			title: 'Mail',
			content: 'artur.januska@gmail.com',
		},
		{
			icon: <SlSocialLinkedin size={30} />,
			title: 'LinkedIn',
			content: 'Artur Januska',
		},
	];

	return (
		<div className='contact-container'>
			<div className='contact'>
				<h4>CONTACT</h4>
				<div className='contact-subtitle'>
					<h5>{"Don't be shy! Hit me up!"}</h5>
					<FaHandPointDown
						size={35}
						color='orange'
						className='icon'
					/>
				</div>
				<div className='contact__content'>
					{cards.map((card, i) => (
						<div
							className='contact-info-card'
							key={i}
						>
							<div className='contact-icon-container'>{card.icon}</div>
							<div className='contact-card-content'>
								<p className='title'>{card.title}</p>
								<p className='content'>{card.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Contact;
