import React from 'react'
import MyCard from '../Reusable/MyCard'
import travelers from '../../../assets/rightSection/travelers.png'
import uconn from '../../../assets/rightSection/uconn.png'

const Career = () => {
	return (
		<>
			<div className='leftSection'>
				<p className='pageHeader select-none'>Career</p>
				<br />

				<MyCard title='Travelers Insurance'>
					<li>Currently I&apos;m in a rotational program within personal insurance:</li>
					<li>
						<b>Year 1</b> - Ab Initio, Teradata/SQL, Jenkins/UCD, PowerShell. Used Ab Initio and Teradata as an ETL tool
						to consume and manipulate data used for analytics further down the data stream in order to make business
						decisions.
					</li>
					<li>
						<b>Year 2</b> - React/JavaScript, C#, PowerShell. Worked on an application used by agents to quote and issue
						insurance policies. Helped with conversion from custom-made framework to React.
					</li>
				</MyCard>
				<MyCard title='UConn Information Technology Services'>
					<li>Support Specialist Lead</li>
					<li>Re-imaged and set up computers for faculty/staff.</li>
					<li>
						Created an electron app to graphically run a PowerShell script. The script was used for automatically
						performing setup tasks for PCs with a fresh install of Windows.
					</li>
					<li>Troubleshooted software/hardware issues quickly and efficiently.</li>
					<li>Hard drives were encrypted on these machines to protect important data.</li>
				</MyCard>
				<br />
			</div>
			<div className='rightSection'>
				<div className='icons'>
					<img src={travelers} alt='travelers' className='w-32 rounded-full' />
					<img src={uconn} alt='uconn' className='w-32' />
				</div>
			</div>
		</>
	)
}

export default Career
