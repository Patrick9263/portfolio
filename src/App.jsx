import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './components/Home/Home'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<ParallaxProvider>
					<Route exact path='/' component={Home} />
				</ParallaxProvider>
			</Switch>
		</BrowserRouter>
	)
}

export default App
