import '../css/footer.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Footer() {
	const visitSocialMedia = (url) => {
		window.open(url, '_blank');
	};

	return (
		<footer
			className='footer-container'
			id='contact'
		>
			<div className='footer'>
				<div className='copyright'>
					<p>Copyright © 2023. All rights are reserved</p>
				</div>
				<div className='links'>
					<div>
						<FaLinkedin
							size={32}
							onClick={() =>
								visitSocialMedia(
									'https://www.linkedin.com/in/artur-januska-11449a258/'
								)
							}
						/>
					</div>
					<div>
						<FaGithubSquare
							size={32}
							onClick={() => visitSocialMedia('https://github.com/Mixmln')}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
