import React from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export default function LandingPage(props) {
    function handlePush() {
      props.history.push('/welcome')
    }
    return (
      <div className='group landing-page'>
        {/* <img 
            className='logo-setup item'
            src={logo} 
            alt='logo' 
            width='100%'
            height='auto'
          /> */}
        <div className='item' 
          style={{
            display: 'flex', 
            justifyContent: 'center'
          }}>
          <h1 style={{
            fontSize: '3.5em',
            fontStyle: 'italic', 
            color: 'white'
            }}>
            TRIPLIST
          </h1>
          <FontAwesomeIcon icon={faPaperPlane} size='2x' inverse/>
        </div>

        <div 
          className='item group' 
          style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            marginRight: '30px'
          }}>
          <h1 
            style={{
              fontSize:'2.5em', 
              fontStyle: 'italic', 
              color: 'white'
          }}
          >
            Store your trip ideas in one place
          </h1>
          <button 
            onClick={handlePush}
            style={{
              color:'white', 
              padding: '20px', 
              marginTop: '30px',
              backgroundColor: 'rgb(20,42,69)', 
              borderRadius: '10px'}}
          >
            <b>GET STARTED</b>
          </button>
        </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
    )
  }