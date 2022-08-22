import React from 'react'
import "./Header.scss"
import {faSliders, faFilter} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className='header-wrapper'>
            <div className='header-body'>
                <h1>Task Manager</h1>
                <div className='header-controls'>
                    <FontAwesomeIcon className='controls-icon' icon={faSliders}/>
                    <FontAwesomeIcon className='controls-icon' icon={faFilter}/>
                </div>
            </div> 
    </header>
  )
}

export default Header