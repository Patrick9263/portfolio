import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import './MyCard.scss'

const MyCard = ({ title, subTitle, children }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title className='select-none'>{title}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>{subTitle}</Card.Subtitle>
				<Card.Text className='select-none text-gray-300'>{children}</Card.Text>
			</Card.Body>
		</Card>
	)
}

MyCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	children: PropTypes.node.isRequired
}

MyCard.defaultProps = {
	subTitle: ''
}

export default MyCard
