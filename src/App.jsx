import './css/main.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from './context/MainContext';

function App() {
	return (
		<Provider>
			<div className='main'>
				<Header />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
