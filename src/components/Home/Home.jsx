import React from 'react'
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
	const secondPageStyle = {
		backgroundImage: `url(https://wallpaper.dog/large/5558065.jpg)`,
		backgroundSize: 'cover'
	}
	return (
		<>
			<Navigation />

			<Parallax pages={2} scrolling horizontal={false}>
				<ParallaxLayer factor={1} offset={0} speed={0.1}>
					<div className='background-image' style={bannerStyle} />
					<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
						<img
							className='w-50 h-50 rounded-full mx-auto'
							style={{ position: 'absolute', top: '55vh' }}
							src={profilePic}
							alt=''
							width='384'
							height='512'
						/>
						<h1 className='text-6xl text-white border-b-4 pb-4' style={{ position: 'absolute', top: '85vh' }}>
							Patrick Smith
						</h1>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={1} offset={1} speed={0.1}>
					<div className='background-image' style={secondPageStyle}>
						<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							<h1 id='about' className='element'>
								Scroll to element
							</h1>
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	)
}

export default Home
