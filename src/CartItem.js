import React from "react";

class CartItem extends React.Component{
     
     constructor(){
          super();
         this.state = {       
             price:999,
             title:'Phone',
             qty:1,
             img:''
         }
         
     }

    render(){
        const {price ,title,qty} = this.state
         return(
            <div className="card-item">
              
                <div className="left-block">
                   
                     <img style={styles.image}/>
                  
                </div>

                <div className="right-block">    
                        <div style={ {fontSize:25} }>{title}</div>
                        <div style={{color:"gray"}}>RS{price}</div>
                        <div style={{color:"gray"}}>Qty:{qty}</div>
                        <div className="cart-item-actions">
                            {/* Buttons */}
                            <img alt="increase" className="action-icons" src=""/>
                            <img alt="decrease" className="action-icons" src=""/>
                            <img alt="delete" className="action-icons" src=""/>
                        </div>
                </div>
             
            </div>

         )
    }
}
const styles = {
      
      image:{
          height:110,
          width:110,
          borderRadius:4,
          background:"gray"
      }
     
}
export default CartItem;