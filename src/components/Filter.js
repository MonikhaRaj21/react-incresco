import React, { Component } from "react";

class Filter extends Component{
    
    render()
    {
        return(
        <div className="filter">
            <div className="filter-result">{this.props.count} Products</div>
            <div className="filter-sort">Order {" "}
            <select onChange={this.props.sortProducts}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          </div>
          
          <div className="filter-category"> Category {" "}
          <select onChange={this.props.filterCategory}>
            <option value="">All</option>
            <option value="Watches">Watches</option>
            <option value="Kurtas">Kurtas</option>
            <option value="Jeans">Jeans</option>
          </select>
            </div>
            <div className="filter-size" onChange={this.props.filterProducts}>Filter {" "}
             <select onChange={this.props.filterGender}> 
                 <option value="Men">Men</option>
                 <option value="Women">Women</option>
             </select>
            </div>

        </div>
        );
    }
}

export default Filter