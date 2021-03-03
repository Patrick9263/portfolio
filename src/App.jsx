import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'
import Home from './components/Home/Home'
import About from './components/About/About'
import Career from './components/Career/Career'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'
import './App.scss'

const App = () => {
	// const location = useLocation()

	// we need to map the `scale` prop we define below
	// to the transform style property
	function mapStyles(styles) {
		return {
			opacity: styles.opacity,
			transform: `scale(${styles.scale})`,
			width: '100%',
			height: '100%',
			display: 'grid',
			gridTemplate: '1fr / 2fr 1fr'
		}
	}

	// wrap the `spring` helper to use a bouncy config
	function bounce(val) {
		return spring(val, {
			stiffness: 330,
			damping: 22
		})
	}

	// child matches will...
	const bounceTransition = {
		// start in a transparent, upscaled state
		atEnter: {
			opacity: 0,
			scale: 1.2
		},
		// leave in a transparent, downscaled state
		atLeave: {
			opacity: bounce(0),
			scale: bounce(0.8)
		},
		// and rest at an opaque, normally-scaled state
		atActive: {
			opacity: bounce(1),
			scale: bounce(1)
		}
	}

	return (
		<BrowserRouter>
			<Navigation />
			<AnimatedSwitch
				atEnter={bounceTransition.atEnter}
				atLeave={bounceTransition.atLeave}
				atActive={bounceTransition.atActive}
				mapStyles={mapStyles}
				className='route-wrapper font-sans antialiased'
			>
				<Route path='/about' component={About} />
				<Route path='/career' component={Career} />
				<Route path='/education' component={Education} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
				<Route exact path='/' component={Home} />
				<Route exact path='*' component={Home} />
			</AnimatedSwitch>
		</BrowserRouter>
	)
}

export default App
