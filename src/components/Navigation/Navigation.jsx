/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './Navigation.scss'

import home from '../../../assets/navBarIcons/home.png'
import about from '../../../assets/navBarIcons/about.png'
import career from '../../../assets/navBarIcons/career.png'
import education from '../../../assets/navBarIcons/education.png'
import projects from '../../../assets/navBarIcons/projects.png'
import info from '../../../assets/navBarIcons/info.png'
import mail from '../../../assets/navBarIcons/mail.png'

import gitHub from '../../../assets/navBarIcons/gitHub.png'
import linkedin from '../../../assets/navBarIcons/linkedin.png'

// import cross from '../../../assets/navBarIcons/cross.png'
// import cloud from '../../../assets/navBarIcons/cloud.png'

const Navigation = () => {
	const [imageStyle, setImageStyle] = useState({ opacity: 1, width: '40%', marginBottom: '10px' })
	const hideImage = { opacity: 0, width: '40%', marginBottom: '10px' }
	const showImage = { opacity: 1, width: '40%', marginBottom: '10px' }
	/*
	const link = (text) => (
		<button type='button' className='navLinks' style={{ zIndex: -1 }}>
			{text}
		</button>
	) */

	return (
		<div className='navBar flex flex-col select-none'>
			{/* {link('.home()')}
			{link('.about()')}
			{link('.career()')}
			{link('.education()')}
			{link('.projects()')}
			{link('.resume()')} */}

			{imageStyle.opacity === 1 ? (
				<img
					src={home}
					alt='.home()'
					style={imageStyle}
					onMouseEnter={() => setImageStyle(hideImage)}
					onMouseLeave={() => setImageStyle(showImage)}
				/>
			) : (
				<p style={{ color: 'white', marginBottom: '10px' }} onMouseLeave={() => setImageStyle(showImage)}>
					.home()
				</p>
			)}

			<img src={about} alt='.about()' style={{ width: '40%', marginBottom: '10px' }} />
			<img src={career} alt='.career()' style={{ width: '40%', marginBottom: '10px' }} />
			<img src={education} alt='.education()' style={{ width: '40%', marginBottom: '10px' }} />
			<img src={projects} alt='.projects()' style={{ width: '40%', marginBottom: '10px' }} />
			<img src={info} alt='.resume()' style={{ width: '40%', marginBottom: '10px' }} />
			<img src={mail} alt='.contact()' style={{ width: '40%', marginBottom: '10px' }} />

			<a href='https://github.com/Patrick9263' className='navBar flex flex-col'>
				<img src={gitHub} alt='.GitHub()' style={{ width: '40%', marginBottom: '10px' }} />
			</a>
			<a href='https://www.linkedin.com/in/patrick-smith1' className='navBar flex flex-col'>
				<img src={linkedin} alt='LinkedIn' style={{ width: '40%', marginBottom: '10px' }} />
			</a>
			{/*
			<img src={cross} alt='cross' style={{ width: '40%' }} />
			<img src={cloud} alt='cloud' style={{ width: '40%' }} />
 */}
		</div>
	)
}

export default Navigation
