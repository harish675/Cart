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

    //increasing quantity  
     handleIncreaseQuantity = (product) =>{
           
           const {products} = this.state;
           const index = products.indexOf(product);
           
            products[index].qty += 1;

           this.setState({
                products:products
           })
     }

     //decreasing quantity
     handleDecreaseQuantity = (product) =>{
          
          const {products} = this.state;
          const index = products.indexOf(product);
           if(products[index].qty != 0){
             
               products[index].qty -= 1;
           }
          this.setState({
               products:products
          })  
     }

     handleDeleteProduct = (id) =>{
         
         const {products} = this.state;

         const items = products.filter((item)=> item.id !== id);
         this.setState({
             products:items
         })
          
     }
      
     render(){
   
         const {products} = this.state;         
         
          return(
             
             <div className="cart">  
                 {products.map((product)=>{
                       
                 return <CartItem product={product}  key={product.id} 
                 onIncreaseQuantity ={this.handleIncreaseQuantity}
                 onDecreaseQuantity = {this.handleDecreaseQuantity}
                 onDeleteProduct = {this.handleDeleteProduct}

                 /> 
                       
                 })}
             </div>
          )
     }
 
}

export default Cart;