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
             // this.increaseQuantity = this.increaseQuantity.bind(this);         
     }

     increaseQuantity = ()=>{
       
         //    this.state.qty += 1;
        //    console.log('this',this.state);


        // // setState from 1 don t required preState then use it
        // // we re render component with updated value
        //  this.setState({
        //       qty:this.state.qty +1,
        //    });

        //setState from 2
        //when we required  the pre state then we use the function from
        this.setState((prevState)=>{
             
           
             return {

                qty:prevState.qty +1,
                
             }
             
        },()=> {
       
             console.log('this.state',this.state);
        });
        
    }

    //for decreasing Quantity

    decreaseQuantity = ()=>{
         
         this.setState((prevState)=>{
             //check the qty not goes in negative
             if(prevState.qty == 0){
                return{
                    qty:prevState.qty
                }
             }
             return {
                 qty:prevState.qty -1
             }
         },()=> {
       
            console.log('this.state',this.state);
       })
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
                                <img 
                                alt="increase" 
                                className="action-icons" 
                                src=""
                                onClick={this.increaseQuantity}
                                />
                                <img 
                                alt="decrease" 
                                className="action-icons" 
                                src=""
                                onClick={this.decreaseQuantity}
                                />
                                <img
                                alt="delete" 
                                className="action-icons" 
                                src=""
                                />
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