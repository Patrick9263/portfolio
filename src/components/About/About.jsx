import React from 'react'
import Navigation from '../Navigation/Navigation'

const About = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>About Me</p>
				<br />

				<li>Description here</li>

				<br />

				<p style={{ fontSize: '20px' }}>Skills</p>
				<br />
				<li>C/C++, Java, Python, MatLab</li>
				<li>React, JavaScript, HTML5, CSS, Markdown</li>
				<li>PowerShell, Bash, MySQL, GitHub, Vim, Emacs, WebStorm</li>
				<li>PC hardware</li>

				<br />

				<p style={{ fontSize: '20px' }}>Skills</p>
				<br />
				<li>Photography</li>
				<li>Videogames</li>
				<li>Travel</li>

				<br />
			</div>
		</div>
	)
}

export default About
