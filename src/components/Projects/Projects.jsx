import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Navigation from '../Navigation/Navigation'
import './Projects.scss'

import dna from '../../../assets/dna.gif'

const Projects = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p style={{ fontSize: '40px' }}>Projects</p>
				<br />

				<Accordion defaultActiveKey='0'>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey='0' className='card'>
							Senior Design Project
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0'>
							<Card.Body className='cardBody'>
								<li>
									Developed a web-based application which allows pathologists easy access to CNV (Copy Number
									Variations) calling using WGS (Whole Genome Sequencing) data to improve research.
								</li>
								<li>
									Application cross referenced any CNVs found with reputable clinical databases to identify CNVs widely
									known to be associated with disease.
								</li>
								<li>Built a clinically relevant copy number variation database.</li>
								<li>
									Displayed copy number variations and clinical annotations to pathologists with a user-friendly GUI.
								</li>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey='1'>
							UConn Hackathon
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='1'>
							<Card.Body className='cardBody'>
								<li>Find and solve present-day problems involving sports and games within 24 hours</li>
								<li>Developed an Android application in a group of three to promote recycling at sports venues</li>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<br />
			</div>

			<div className='rightSection'>
				<img src={dna} alt='dna' style={{ width: '100px' }} />
			</div>
		</div>
	)
}

export default Projects
