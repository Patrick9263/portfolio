import React from 'react'
import Navigation from '../Navigation/Navigation'
import MyCard from '../Reusable/MyCard'

const Career = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader'>Career</p>
				<br />

				<MyCard title='Travelers Insurance'>
					<li>Rotational Program</li>
					<li>Ab Initio</li>
					<li>SUI - React and JavaScript</li>
				</MyCard>
				<MyCard title='UConn Information Technology Services'>
					<li>Support Specialist Lead</li>
					<li>Re-imaged and set up computers for faculty/staff.</li>
					<li>Troubleshooted software/hardware issues quickly and efficiently.</li>
					<li>Hard drives were encrypted on these machines to protect important data.</li>
				</MyCard>
				<MyCard title='Target Corporation'>
					<li>Cashier</li>
					<li>Guest Services</li>
					<li>Helped guests with returns, paying bills, and confirming online orders quickly and efficiently.</li>
					<li>
						Organized damaged products by type, separated and organized carts of various products to be reshelved.
					</li>
				</MyCard>
				<br />
			</div>
		</div>
	)
}

export default Career
