import React from 'react'
import Navigation from '../Navigation/Navigation'
import MyCard from '../Reusable/MyCard'
import dna from '../../../assets/rightSection/dna.gif'
import hackathon from '../../../assets/rightSection/hackathon.jpg'
import './Projects.scss'

const Projects = () => {
	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader select-none'>Projects</p>
				<br />

				<MyCard title='Senior Design Project'>
					<li>
						Developed a web-based application which allows pathologists easy access to CNV (Copy Number Variations)
						calling using WGS (Whole Genome Sequencing) data to improve research.
					</li>
					<li>
						Application cross referenced any CNVs found with reputable clinical databases to identify CNVs widely known
						to be associated with disease.
					</li>
					<li>Built a clinically relevant copy number variation database.</li>
					<li>Displayed copy number variations and clinical annotations to pathologists with a user-friendly GUI.</li>
				</MyCard>
				<MyCard title='UConn Hackathon'>
					<li>Find and solve present-day problems involving sports and games within 24 hours</li>
					<li>Developed an Android application in a group of three to promote recycling at sports venues</li>
				</MyCard>
				<br />
			</div>

			<div className='rightSection'>
				<div className='icons'>
					<img src={dna} alt='dna' className='w-32' />
					<img src={hackathon} alt='hackathon' className='rounded-full w-32' />
				</div>
			</div>
		</div>
	)
}

export default Projects
