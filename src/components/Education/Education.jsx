import React from 'react'
import Navigation from '../Navigation/Navigation'

const Education = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>Education</p>
				<br />

				<li>University of Connecticut - Bachelor of Science in Engineering</li>
				<li>Major in Computer Science and Engineering (Concentration in Software Design)</li>
				<li>Minor in Mathematics</li>
				<li>Cumulative GPA: 3.45</li>
				<br />
			</div>
		</div>
	)
}

export default Education
