import React from 'react'
import Navigation from '../Navigation/Navigation'

const Projects = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>Projects</p>
				<br />

				<li>Senior Design Project</li>
				<li>
					Developed web application and server to detect Copy Number Variations (CNVs) to detect mental illnesses,
					developmental disorders, and cancer to improve research
				</li>
				<li>UConn Hackathon</li>
				<li>Find and solve present-day problems involving sports and games within 24 hours</li>
				<li>Developed an Android application in a group of three to promote recycling at sports venues</li>
				<br />
			</div>
		</div>
	)
}

export default Projects
