import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Home.scss'

// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop
// https://www.iconshock.com
// https://jacekjeznach.com/
// https://www.heropatterns.com/

// filter generator:
// https://codepen.io/sosuke/pen/Pjoqqp

// https://fontisto.com/icons

const Home = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />
			<div className='leftSection select-none mobileMarginTop'>
				<p className='select-none' style={{ fontSize: '40px' }}>
					Hi, I&apos;m Patrick!
				</p>
				<p className='select-none' style={{ fontSize: '40px' }}>
					I&apos;m a software engineer at Travelers.
				</p>
				<p className='select-none' style={{ color: 'gray' }}>
					React and JavaScript Developer
				</p>
			</div>
		</div>
	)
}

export default Home
