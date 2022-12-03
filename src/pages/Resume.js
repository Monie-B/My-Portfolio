import React from 'react';
import NavBar from '../components/NavBar';
import '../CSS/resume.css'


const Resume = () => {
  return (
    <>
      <header>
        <h1>
          Review My Resume
        </h1>
      </header>
      <NavBar />
      <div className='resume-bar'>
        <div>
          <img src='Screenshot_20221202_084640.png' alt='resume icon'></img>
        </div>
        {/* <div className='container'>
          <img src='linkedin.png' alt='LinkedIn icon to navigate to LinkedIn profile'>
            LinkedIn Profile
          </img>
        </div> */}
      </div>
    </>
  )
}

export default Resume