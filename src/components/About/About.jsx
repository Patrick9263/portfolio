import React from 'react'
import Navigation from '../Navigation/Navigation'

const About = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<br />
				<h1>About</h1>

				<li>Description here</li>
				<li>Interests</li>
				<br />
				<h1>Skills</h1>

				<li>C/C++, Java, Python, MatLab</li>
				<li>React, JavaScript, HTML5, CSS, Markdown</li>
				<li>PowerShell, Bash, MySQL, GitHub, Vim, Emacs, WebStorm</li>
				<li>PC hardware</li>

				<br />
			</div>
		</div>
	)
}

export default About
