
import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) =>{    

    return (
            
        <div className="navbar">
             
            <div className="cart-icon-container">
                    <span className="cartIcon">
                        <FontAwesomeIcon className="icon" icon={faCartShopping}/>
                    </span> 
                    <span className="cartCount">
                        {props.count}
                    </span>
            </div>
                    
                  
                
        </div>
            
        )

}
     
      
 




export default Navbar;