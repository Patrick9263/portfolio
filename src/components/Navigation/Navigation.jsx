import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import './Navigation.scss'

const Navigation = () => {
	const linkStyles = 'navLinks text-2 text-gray-300 mr-10 shadow-sm'

	return (
		<div className='navBar flex flex-row justify-end items-center select-none absolute inset-x-0 top-0 h-16'>
			<Link className={linkStyles} to='about' spy={false} smooth duration={500}>
				About
			</Link>

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
		</div>
	)
}

export default Navigation
