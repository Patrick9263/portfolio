import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import './MyCard.scss'

const MyCard = ({ title, children }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title className='select-none'>{title}</Card.Title>
				<Card.Text className='select-none text-gray-300'>{children}</Card.Text>
			</Card.Body>
		</Card>
	)
}

MyCard.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default MyCard
