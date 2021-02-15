import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './AccordionCard.scss'

const AccordionCard = ({ eventKey, title, children }) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey={eventKey} className='card select-none'>
				{title}
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={eventKey}>
				<Card.Body className='cardBody select-none'>{children}</Card.Body>
			</Accordion.Collapse>
		</Card>
	)
}

AccordionCard.propTypes = {
	eventKey: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default AccordionCard
