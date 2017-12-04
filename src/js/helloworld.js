import React, { Component } from 'react'; 

class Enter extends Component{
    render() {
        const row=[];
        this.props.products.forEach((product) => {
            row.push(<div key={product.name}>{product.name}</div>)
        });
        return (
            <div>
                <input type="text"/>
                {row}
            </div>  
        );
    }
}



const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

export default class Hello extends Component {  
  render() {  
      return (  
          <div>  
              <h1>Hello, world.</h1>  
              <p>this is a simple section</p>  
              <p>success</p> 
              <Enter products={PRODUCTS}/>
          </div>  
      );  
  }  
}  