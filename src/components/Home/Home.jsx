import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Home.scss'

// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop
// https://www.iconshock.com
// https://jacekjeznach.com/
// https://www.heropatterns.com/

const HomeSection = () => {
	return (
		<>
			<p style={{ fontSize: '40px' }}>Hi, I&apos;m Patrick!</p>
			<p style={{ fontSize: '40px' }}>I&apos;m a software engineer at Travelers.</p>
			<p style={{ color: 'gray' }}>React and JavaScript Developer</p>
		</>
	)
}

const Home = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />
			<div className='leftSection'>
				<HomeSection />
			</div>
		</div>
	)
}

export default Home
