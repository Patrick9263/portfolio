import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import AccordionCard from '../Reusable/AccordionCard'
import Navigation from '../Navigation/Navigation'

const Career = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>Career</p>
				<br />

				<Accordion defaultActiveKey='0'>
					<AccordionCard eventKey='0' title='Travelers Insurance'>
						<li>Rotational Program</li>
						<li>Ab Initio</li>
						<li>SUI - React and JavaScript</li>
					</AccordionCard>
					<AccordionCard eventKey='1' title='UConn Information Technology Services'>
						<li>Support Specialist Lead</li>
						<li>Re-imaged and set up computers for faculty/staff.</li>
						<li>Troubleshooted software/hardware issues quickly and efficiently.</li>
						<li>Hard drives were encrypted on these machines to protect important data.</li>
					</AccordionCard>
					<AccordionCard eventKey='2' title='Target Corporation'>
						<li>Cashier</li>
						<li>Guest Services</li>
						<li>Helped guests with returns, paying bills, and confirming online orders quickly and efficiently.</li>
						<li>
							Organized damaged products by type, separated and organized carts of various products to be reshelved.
						</li>
					</AccordionCard>
				</Accordion>
				<br />
			</div>
		</div>
	)
}

export default Career
