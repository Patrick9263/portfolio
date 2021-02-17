import React from 'react'
import Navigation from '../Navigation/Navigation'
import MyCard from '../Reusable/MyCard'

const Education = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader select-none'>Education</p>
				<br />

				<MyCard title='University of Connecticut'>
					<li>Bachelor of Science in Engineering</li>
					<li>Major in Computer Science and Engineering</li>
					<li>Concentration in Software Design</li>
					<li>Minor in Mathematics</li>
					<li>Cumulative GPA of 3.45</li>
				</MyCard>
			</div>
		</div>
	)
}

export default Education
