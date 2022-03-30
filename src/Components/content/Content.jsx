import "./Content.css"
import React from "react"
import {ReactComponent as ReactLogo} from './img1.svg';

export const Content = () => {
    return (
        <div>
            <div className="center-image"><ReactLogo/>
            </div>
            <div className="heading-intro">
              <p className="heading">Login with your Mobile Number</p>
                <p className="text-small">Claim, edit or renew your policy</p>
            </div>
            <div className="input-container">
                <input id="big-input" type="number" />

            </div>
            <div className="checkbox-container">
                <input type="checkbox" id="agree" name="agree" value="bike" />
                <label htmlFor="agree">Recieve improtant updates on Whatsapp</label>
            </div>
            <button className="button-grey">Get OTP</button>
           
        </div>
    
    )
}