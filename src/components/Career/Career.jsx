import React from 'react'
import Navigation from '../Navigation/Navigation'
import MyCard from '../Reusable/MyCard'
import travelers from '../../../assets/rightSection/travelers.png'
import uconn from '../../../assets/rightSection/uconn.png'

const Career = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader select-none'>Career</p>
				<br />

				<MyCard title='Travelers Insurance'>
					<li>Rotational Program</li>
					<li>Year 1: Ab Initio, Jenkins/UCD, PowerShell</li>
					<li>Year 2: React/JavaScript, C#, PowerShell</li>
				</MyCard>
				<MyCard title='UConn Information Technology Services'>
					<li>Support Specialist Lead</li>
					<li>Re-imaged and set up computers for faculty/staff.</li>
					<li>Troubleshooted software/hardware issues quickly and efficiently.</li>
					<li>Hard drives were encrypted on these machines to protect important data.</li>
				</MyCard>
				<br />
			</div>
			<div className='rightSection'>
				<div className='icons'>
					<img src={travelers} alt='travelers' className='w-32' />
					<img src={uconn} alt='uconn' className='w-32' />
				</div>
			</div>
		</div>
	)
}

export default Career
