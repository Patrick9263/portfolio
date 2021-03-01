import React from 'react'
import MyCard from '../Reusable/MyCard'
import uconn from '../../../assets/rightSection/uconn.png'

const Education = () => {
	return (
		<>
			<div className='leftSection'>
				<p className='pageHeader select-none'>Education</p>
				<br />

				<MyCard title='University of Connecticut'>
					<li>Bachelor of Science in Engineering</li>
					<li>Major in Computer Science and Engineering</li>
					<li>Concentration in Software Design and Development</li>
					<li>Minor in Mathematics</li>
					<li>Cumulative GPA of 3.45</li>
				</MyCard>
			</div>
			<div className='rightSection'>
				<div className='icons'>
					<img src={uconn} alt='uconn' className='w-32' />
				</div>
			</div>
		</>
	)
}

export default Education
