import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function welcome() {
  return (
    <div className='welcome-container'>
      <div className='welcome-sub-1'>
        <div className='welcome-icon'>
        <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{color: "#e6e6e6",}} />
        </div>
        <div className='welcome-text'>
          <p>Welcome to ChatGPT</p>
          <p>Log in with your OpenAI account to continue</p>
        </div>
        <div className='welcome-button'>
          <Link to='/login'><button>Log in</button></Link>
          <Link to='/signup'><button>Sign up</button></Link>
        </div>
      </div>
      <div className='welcome-sub-2'>
        <Link to='https://openai.com/policies/terms-of-use' target='_blank' style={{textDecoration:"none", color:"#bdbdbe", fontSize:"0.7rem", fontFamily:"'Open Sans', sans-serif"
      }}>Terms of use</Link>
        <span style={{color:"#bdbdbe", margin:"1rem"}}>|</span>
        <Link to='https://openai.com/policies/privacy-policy' target='_blank' style={{textDecoration:"none", color: "#bdbdbe", fontSize:"0.7rem", fontFamily:"'Open Sans', sans-serif"
      }}>Privacy policy</Link>
      </div>
    </div>
  )
}

export default welcome