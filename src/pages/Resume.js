import React from 'react';
import NavBar from '../components/NavBar';
import '../CSS/resume.css'


const Resume = () => {
  return (
    <>
      <header>
        <h1>
          Let's Get in Contact
        </h1>
      </header>
      <NavBar />
      <div className='resume-bar'>
          <img src='Screenshot_20221202_084640.png' alt='Monica resume document'></img>
        </div>
        <div className='side-group'>
          <div className='sm-container'>
            <div className='linkedin'>
              <a href='https://www.linkedin.com/in/monica-bullock-502945248/' target='_blank' rel="noreferrer">
                <img src='linkedin.png' alt='LinkedIn Icon'></img>Let's Connect
              </a>
            </div>
            <div className='github1'>
            <a href='https://github.com/Monie-B' target='_blank' rel="noreferrer">
              <img src='github.png' alt='Github icon'></img>Github Profile
            </a>
          </div>
      </div>
    </div>
  </>
  )
}

export default Resume