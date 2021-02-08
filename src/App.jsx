import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Career from './components/Career/Career'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/about' component={About} />
				<Route path='/career' component={Career} />
				<Route path='/education' component={Education} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
				<Route exact path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
