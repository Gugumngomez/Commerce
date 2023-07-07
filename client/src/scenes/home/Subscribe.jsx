import { useState } from 'react'
import SubscribeCss from "./Subscribe.module.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
      <div className={SubscribeCss.emailContainer}>
          <button>
          <i className="fa-solid fa-envelope fa-lg"></i>
          </button>
          <h3>Subscribe To Our Newsletter</h3>
          <h4>and receinge R250 coupon for your first order when you checkout</h4>
          <div className={SubscribeCss.input}>
              <input placeholder="Your Email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}/>
          </div>
          <div className={SubscribeCss.div}></div>
          <h3>Subscribe</h3>
      </div>
  )
}

export default Subscribe