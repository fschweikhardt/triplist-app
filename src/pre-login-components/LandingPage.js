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
        <div className='item group' 
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
            // backgroundColor: 'rgb(20,42,69,.4)',
            padding: '20px',
            marginBottom: '50px',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            margin: '0 30px'
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
              marginTop: '30px',
              backgroundColor: 'rgb(0,150,225)', 
              borderRadius: '10px'}}
          >
            <b>GET STARTED</b>
          </button>
        </div>
          {/* <br />
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
          <br /> */}
      </div>
    )
  }