import React from 'react'
import ReactDOM from 'react-dom'

import './SideDrawer.css'

const SideDrawer = props => {
	const content = <aside className='side-drawer'>{props.children}</aside>

	// A react portal allows you to render React elements in other areas of the HTML page aside from the 'root' element
	return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
