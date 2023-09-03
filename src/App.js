import CartItem from "./CartItem";
import Cart  from "./Cart";
import Navbar from './Navbar';
import React from "react";
import './app.css';


class App extends React.Component {
    
  constructor(){
    super();
  this.state = {       
      products: [
          { 
              price:80,
              title:'Watch',
              qty:1,
              img:'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_640.jpg',
              id:1,

          }  ,
          { 
              price:9999,
              title:'mobilePhone',
              qty:2,
              img:'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png',
              id:2,

          }  ,
          { 
              price:1999,
              title:'Phone',
              qty:7,
              img:'https://cdn.pixabay.com/photo/2018/08/09/10/46/telephone-3594206_640.jpg',
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
  
  getCartCount = () => {
     
     const {products} =this.state;
     let count =0;

     products.forEach((product)=>{
           count += product.qty;
     })

     return count;
  }

  getCartTotal = () =>{
      
       const{products} = this.state;
       
       let cartTotal= 0;
       products.map((product)=>{
          
          cartTotal = cartTotal + product.qty*product.price;
          
       })
     
        return cartTotal;
  }

  render(){
       
     const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
           products = {products}
           onIncreaseQuantity ={this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.handleDeleteProduct}   
        />
         <div className="cartTotal">Total:{this.getCartTotal()}</div>
      </div>

    );
  }
}

export default App;
