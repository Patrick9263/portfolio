import React from 'react'
import Navigation from '../Navigation/Navigation'
import MyCard from '../Reusable/MyCard'
import react from '../../../assets/rightSection/react.gif'
import python from '../../../assets/rightSection/python.gif'
import c from '../../../assets/rightSection/c.gif'

const About = () => {
	const im = "I'm"
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader select-none'>About Me</p>
				<br />

				<MyCard title='Overview'>
					{im} a software engineer at Travelers, where {im} currently in a rotational program. {im} in my second year
					where I work with React/JavaScript, as well as some occasional C# and PowerShell.
				</MyCard>
				<MyCard title='Skills'>
					<li>React, JavaScript, HTML5, CSS, REST APIs, Markdown, AsciiDocs</li>
					<li>Python, C/C++, C#, Java, MatLab</li>
					<li>PowerShell, Bash, MySQL, Git</li>
					<li>PC hardware</li>
				</MyCard>
				<MyCard title='Interests'>
					<li>Photography</li>
					<li>Videogames</li>
					<li>Travel</li>
				</MyCard>
			</div>
			<div className='rightSection'>
				<div className='icons'>
					<img src={react} alt='react' className='w-32' />
					<img src={python} alt='python' className='w-32 rounded-full' />
					<img src={c} alt='c' className='w-32' />
				</div>
			</div>
		</div>
	)
}

export default About
