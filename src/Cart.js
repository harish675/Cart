import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
     constructor(){
          super();
         this.state = {       
             products: [
                { 
                    price:80,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1,

                }  ,
                { 
                    price:9999,
                    title:'mobilePhone',
                    qty:2,
                    img:'',
                    id:2,

                }  ,
                { 
                    price:1999,
                    title:'Phone',
                    qty:7,
                    img:'',
                    id:3,

                }  
             ]
         }
             // this.increaseQuantity = this.increaseQuantity.bind(this);         
     }
      
     render(){
   
         const {products} = this.state;         
         
          return(
             
             <div className="cart">  
                 {products.map((product)=>{
                       
                 return <CartItem product={product}  key={product.id} /> 
                       
                 })}
             </div>
          )
     }
 
}

export default Cart;