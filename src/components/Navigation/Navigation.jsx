/* eslint-disable react/prop-types */
import React from 'react'
import './Navigation.scss'

const Navigation = (props) => {
	const linkStyles = 'navLinks text-2 text-gray-300 mr-10 shadow-sm'

	const executeScroll = (refName) => {
		const smoothScroll = { behavior: 'smooth', block: 'start' }
		switch (refName) {
			case 'about':
				props.aboutRef.current.scrollIntoView(smoothScroll)
				break
			case 'career':
				props.careerRef.current.scrollIntoView(smoothScroll)
				break
			case 'education':
				props.educationRef.current.scrollIntoView(smoothScroll)
				break
			case 'projects':
				props.projectsRef.current.scrollIntoView(smoothScroll)
				break
			case 'resume':
				props.resumeRef.current.scrollIntoView(smoothScroll)
				break
			default:
				break
		}
	}

	return (
		<div className='navBar flex flex-row justify-end items-center select-none absolute inset-x-0 top-0 h-16'>
			<button type='button' className={linkStyles} onClick={() => executeScroll('about')}>
				About
			</button>

			<button type='button' className={linkStyles} onClick={() => executeScroll('career')}>
				Career
			</button>

			<button type='button' className={linkStyles} onClick={() => executeScroll('education')}>
				Education
			</button>

			<button type='button' className={linkStyles} onClick={() => executeScroll('projects')}>
				Projects
			</button>

			<button type='button' className={linkStyles} onClick={() => executeScroll('resume')}>
				Resume
			</button>
		</div>
	)
}

export default Navigation
