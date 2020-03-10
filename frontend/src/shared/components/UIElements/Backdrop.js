import React from 'react'
import ReactDOM from 'react-dom'

import './Backdrop.css'

// this is a background rendered behind the side drawer, allowing you to click and close the drawer
const Backdrop = props => {
	return ReactDOM.createPortal(
		<div className='backdrop' onClick={props.onClick}></div>,
		document.getElementById('backdrop-hook')
	)
}

export default Backdrop
