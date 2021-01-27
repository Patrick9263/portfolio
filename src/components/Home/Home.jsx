import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import Navigation from '../Navigation/Navigation'
import './style.scss'

import profilePic from '../../../assets/profilePic.png'
import banner from '../../../assets/banner.jpeg'

// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop

const Home = () => {
	return (
		<div className='flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-900 to-blue-700'>
			<Navigation />

			<img
				className='w-50 h-50 mx-auto'
				src={banner}
				// src='https://www.wallpapertip.com/wmimgs/116-1168442_landscape-4k-mountains.jpg'
				alt=''
				width='100%'
				height='100vh'
			/>

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

			<ParallaxBanner
				id='about'
				className=''
				layers={[
					{
						image: 'https://wallpaper.dog/large/5558065.jpg',
						amount: 0.1
					}
				]}
				style={{
					filter: 'blur(8px)',
					WebkitFilter: 'blur(8px)',
					opacity: 0.2
				}}
			/>
		</div>
	)
}

export default Home
