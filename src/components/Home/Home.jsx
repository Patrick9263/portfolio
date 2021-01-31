import React, { useRef } from 'react'
// import { ParallaxBanner } from 'react-scroll-parallax'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import Navigation from '../Navigation/Navigation'
import './Home.scss'

import profilePic from '../../../assets/profilePic.png'
import banner from '../../../assets/banner.jpeg'
// other background
// https://wallpaper.dog/large/5558065.jpg
// https://www.wallpapertip.com/wmimgs/116-1168442_landscape-4k-mountains.jpg

// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop

const Home = () => {
	const bannerStyle = {
		backgroundImage: `url(${banner})`
	}
	const aboutPageStyle = {
		backgroundImage: `url(https://wallpaper.dog/large/5558065.jpg)`,
		backgroundSize: 'cover'
	}
	const careerPageStyle = {
		backgroundImage: `url(https://www.mural-wallpaper.com/wp-content/uploads/2019/07/A-S19-1.jpeg)`,
		backgroundSize: 'cover'
	}
	const educationPageStyle = {
		backgroundImage: `url(https://w.wallha.com/ws/9/eUQJarGq.jpg)`,
		backgroundSize: 'cover'
	}
	const projectsPageStyle = {
		backgroundImage: `url(https://wallpapercave.com/wp/wp2825923.jpg)`,
		backgroundSize: 'cover'
	}
	const resumePageStyle = {
		backgroundImage: `url(https://wallpapercave.com/wp/wp7447287.jpg)`,
		backgroundSize: 'cover'
	}
	const aboutRef = useRef(null)
	const careerRef = useRef(null)
	const educationRef = useRef(null)
	const projectsRef = useRef(null)
	const resumeRef = useRef(null)
	return (
		<>
			<Navigation
				aboutRef={aboutRef}
				careerRef={careerRef}
				educationRef={educationRef}
				projectsRef={projectsRef}
				resumeRef={resumeRef}
			/>

			<Parallax pages={6} scrolling horizontal={false}>
				<ParallaxLayer factor={1} offset={0} speed={0}>
					<div className='background-image' style={bannerStyle} />
					<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
						<img
							className='w-50 h-50 rounded-full mx-auto'
							style={{ position: 'absolute', top: '30%' }}
							src={profilePic}
							alt=''
							width='384'
							height='512'
						/>
						<h1 className='text-6xl text-white border-b-4 pb-4' style={{ position: 'absolute', top: '80%' }}>
							Patrick Smith
						</h1>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={1} speed={0}>
					<div className='background-image' style={aboutPageStyle}>
						<div ref={aboutRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 className='sectionTitle text-6xl text-white border-b-4 pb-4'>About Me</h1>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={2} speed={0}>
					<div className='background-image' style={careerPageStyle}>
						<div ref={careerRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 className='sectionTitle text-6xl text-black border-b-4 pb-4'>Career</h1>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={3} speed={0}>
					<div className='background-image' style={educationPageStyle}>
						<div ref={educationRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 className='sectionTitle text-6xl text-white border-b-4 pb-4'>Education</h1>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={4} speed={0}>
					<div className='background-image' style={projectsPageStyle}>
						<div ref={projectsRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 className='sectionTitle text-6xl text-white border-b-4 pb-4'>Projects</h1>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={5} speed={0}>
					<div className='background-image' style={resumePageStyle}>
						<div ref={resumeRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 className='sectionTitle text-6xl text-black border-b-4 pb-4'>Resume</h1>
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	)
}

export default Home
