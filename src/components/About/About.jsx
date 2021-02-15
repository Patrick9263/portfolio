import React from 'react'
import Navigation from '../Navigation/Navigation'

const About = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>About Me</p>
				<br />

				<li>Hey, I&apos;m Patrick, a software developer at Travelers.</li>

				<br />

				<p style={{ fontSize: '20px' }}>Skills</p>
				<br />
				<li>React, JavaScript, HTML5, CSS, REST APIs, Markdown, AsciiDocs</li>
				<li>Python, C/C++, Java, MatLab</li>
				<li>PowerShell, Bash, MySQL, Git</li>
				<li>PC hardware</li>

				<br />

				<p style={{ fontSize: '20px' }}>Interests</p>
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
