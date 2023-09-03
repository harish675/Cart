import React from "react";
import "./cart-item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faCirclePlus,faCircleMinus,faTrashCan} from '@fortawesome/free-solid-svg-icons'



const CartItem = (props)=>{
      
    const {price ,title,qty} =props.product;

    return(

    <div className="card-item">
        
        <div className="left-block">
            
                <img style={styles.image} src={props.product.img}/>
            
        </div>

        
        <div className="right-block">    
                <div style={ {fontSize:25} }>{title}</div>
                <div style={{color:"gray"}}>RS{price}</div>
                <div style={{color:"gray"}}>Qty:{qty}</div>
                <div className="cart-item-actions">
                        {/* Buttons */}
                        <FontAwesomeIcon 
                         className="action-icons" 
                         onClick={ () =>props.onIncreaseQuantity(props.product)}
                         icon={faCirclePlus}
                         />
                         <FontAwesomeIcon 
                         className="action-icons" 
                         onClick={() => props.onDecreaseQuantity(props.product)}
                         icon={faCircleMinus}
                         />
                        <FontAwesomeIcon 

                         className="action-icons" 
                         onClick={() => props.onDeleteProduct(props.product.id)}
                         icon={faTrashCan}

                         />
                </div>
        </div>
    
    </div>

    )

}
    
const styles = {
      
      image:{
          height:110,
          width:110,
          borderRadius:4,
      }
     
}
export default CartItem;