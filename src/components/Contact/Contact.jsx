import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navigation from '../Navigation/Navigation'
import './Contact.scss'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			name,
			email,
			subject,
			message
		}
		console.log('submitted form with data: ')
		console.log(data)
	}

	return (
		<div className='bodyContainer font-sans antialiased'>
			<Navigation />

			<div className='leftSection'>
				<p className='pageHeader select-none'>Contact Me</p>

				<Form className='formContainer' onSubmit={handleSubmit}>
					<Form.Row style={{ justifyContent: 'space-between' }}>
						<Form.Group as={Form.Col} controlId='formGridName' style={{ width: '48%' }}>
							<input
								className='textBox'
								placeholder='Name'
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</Form.Group>
						<Form.Group as={Form.Col} controlId='formGridEmail' style={{ width: '48%' }}>
							<input
								className='textBox'
								placeholder='Email'
								type='email'
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group controlId='formGridSubject' className='formGroup'>
							<input
								className='textBox'
								placeholder='Subject'
								value={subject}
								onChange={(event) => setSubject(event.target.value)}
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group controlId='formGridMessage' className='formGroup'>
							<textarea
								value={message}
								onChange={(event) => setMessage(event.target.value)}
								placeholder='Message'
								className='textBox'
							/>
						</Form.Group>
					</Form.Row>
					<Button variant='outline-dark' type='submit' onSubmit={(e) => handleSubmit(e)} className='formButton'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Contact
