import React, { Component } from "react";
 export default class Products extends Component{
     render(){
         return(
             <div>
                 <ul className="products">
                 {this.props.products.map((product) => (
                <li key={product.productId}>
                  <div className="product">
                    <a
                      href={"#" + product.productId}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.searchImage} alt={product.productName}></img>
                      <p>{product.productName}</p>
                    </a>
                    <div className="product-price">
                      <div>Rs. {product.price}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
                 </ul>
             </div>
         );
     }
 }