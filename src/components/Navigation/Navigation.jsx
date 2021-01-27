import React from 'react'
// import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
	const linkStyles = 'text-2 text-gray-300 mr-5 shadow-sm navLinks'

	return (
		<div className='flex flex-row justify-end items-center select-none absolute inset-x-0 top-0 h-16'>
			<a href='#about' className={linkStyles}>
				About
			</a>

			<a href='#career' className={linkStyles}>
				Career
			</a>

			<a href='#education' className={linkStyles}>
				Education
			</a>

			<a href='#projects' className={linkStyles}>
				Projects
			</a>

			<a href='#resume' className={linkStyles}>
				Resume
			</a>

			{/*
			<Link to='#about' className={linkStyles}>
				About
			</Link>

			<Link to='#career' className={linkStyles}>
				Career
			</Link>

			<Link to='#education' className={linkStyles}>
				Education
			</Link>

			<Link to='#projects' className={linkStyles}>
				Projects
			</Link>

			<Link to='#resume' className={linkStyles}>
				Resume
			</Link>
*/}
		</div>
	)
}

export default Navigation
