import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo only letter.png'
import './Navigation.scss'

import home from '../../../assets/icons/png/interfaces/home.png'
import about from '../../../assets/icons/png/interfaces/nav-icon-list-a.png'
import career from '../../../assets/icons/png/editors/file-1.png'

import education from '../../../assets/icons/png/interfaces/person.png'
import projects from '../../../assets/icons/png/interfaces/code.png'
import mail from '../../../assets/icons/png/interfaces/email.png'

import gitHub from '../../../assets/icons/png/brand/github.png'
import linkedin from '../../../assets/icons/png/brand/linkedin.png'

const Navigation = () => {
	const purpleFilter = 'invert(15%) sepia(98%) saturate(5270%) hue-rotate(264deg) brightness(92%) contrast(89%)'
	const imgStyle = { width: '35%', marginBottom: '40px', filter: purpleFilter }
	const mediaStyle = {
		width: '35%',
		marginBottom: '20px',
		filter: purpleFilter
	}
	return (
		<div className='navBar flex flex-col select-none'>
			<img src={logo} alt='logo' style={{ width: '70px', backgroundColor: 'rgb(20, 20, 20)' }} />

			<div>
				<Link to='/' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={home} alt='.home()' style={imgStyle} />
				</Link>
				<Link to='/about' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={about} alt='.about()' style={imgStyle} />
				</Link>
				<Link to='/career' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={career} alt='.career()' style={imgStyle} />
				</Link>
				<Link to='/education' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={education} alt='.education()' style={imgStyle} />
				</Link>
				<Link to='/projects' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={projects} alt='.projects()' style={imgStyle} />
				</Link>
				<Link to='/contact' className='navBar flex flex-col' style={{ color: 'white' }}>
					<img src={mail} alt='.contact()' style={imgStyle} />
				</Link>
			</div>

			<div>
				<a href='https://github.com/Patrick9263' target='_blank' rel='noreferrer' className='navBar flex flex-col'>
					<img src={gitHub} alt='.GitHub()' style={mediaStyle} />
				</a>
				<a
					href='https://www.linkedin.com/in/patrick-smith1'
					target='_blank'
					rel='noreferrer'
					className='navBar flex flex-col'
				>
					<img src={linkedin} alt='LinkedIn' style={mediaStyle} />
				</a>
			</div>
		</div>
	)
}

export default Navigation
