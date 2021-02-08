import React from 'react'

import Navigation from '../Navigation/Navigation'
import './Home.scss'

import logo from '../../../assets/logo only letter.png'
// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop
// https://www.iconshock.com
// https://jacekjeznach.com/
// https://www.heropatterns.com/

const HomeSection = () => {
	return (
		<>
			<p style={{ fontSize: '40px' }}>Hi, I&apos;m Patrick!</p>
			<p style={{ fontSize: '40px' }}>I&apos;m a software engineer at Travelers.</p>
			<p style={{ color: 'gray' }}>React and JavaScript Developer</p>
		</>
	)
}

const AboutSection = () => {
	return (
		<>
			<br />
			<h1>About</h1>

			<li>Description here</li>
			<li>Interests</li>
			<br />
		</>
	)
}
const SkillsSection = () => {
	return (
		<div>
			<br />
			<h1>Skills</h1>

			<li>C/C++, Java, Python, MatLab</li>
			<li>React, JavaScript, HTML5, CSS, Markdown</li>
			<li>PowerShell, Bash, MySQL, GitHub, Vim, Emacs, WebStorm</li>
			<li>PC hardware</li>

			<br />
		</div>
	)
}
const CareerSection = () => {
	return (
		<>
			<br />
			<h1>Career</h1>

			<li>Travelers Insurance</li>
			<li>UConn Information Technology Services</li>
			<li>Target Corporation</li>

			<br />
		</>
	)
}
const EducationSection = () => {
	return (
		<>
			<br />
			<h1>Education</h1>

			<li>University of Connecticut - Bachelor of Science in Engineering</li>
			<li>Major in Computer Science and Engineering (Concentration in Software Design)</li>
			<li>Minor in Mathematics</li>
			<li>Cumulative GPA: 3.45</li>
			<br />
		</>
	)
}
const ProjectsSection = () => {
	return (
		<>
			<br />
			<h1>Projects</h1>

			<li>Senior Design Project</li>
			<li>
				Developed web application and server to detect Copy Number Variations (CNVs) to detect mental illnesses,
				developmental disorders, and cancer to improve research
			</li>
			<li>UConn Hackathon</li>
			<li>Find and solve present-day problems involving sports and games within 24 hours</li>
			<li>Developed an Android application in a group of three to promote recycling at sports venues</li>
			<br />
		</>
	)
}
const ResumeSection = () => {
	return (
		<>
			<br />
			<h1>Resume</h1>

			<a href='#test' style={{ color: '#5587af' }}>
				Put Link Here
			</a>
			<br />
		</>
	)
}
const ContactSection = () => {
	return (
		<>
			<br />
			<h1>Contact Me</h1>

			<li>Put Contact info here</li>
			<br />
		</>
	)
}

const Home = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<img src={logo} alt='logo' style={{ backgroundColor: 'rgb(20, 20, 20)' }} />
			<Navigation />

			<div className='leftSection'>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<CareerSection />
				<EducationSection />
				<ProjectsSection />
				<ResumeSection />
				<ContactSection />
			</div>
		</div>
	)
}

export default Home
