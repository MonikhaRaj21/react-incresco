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
            <div className="filter-size" onChange={this.props.filterProducts}>Filter {" "}
             <select onChange={this.props.filterProducts}> 
                 <option value="">ALL</option>
                 <option value="XS">Extra Small</option>
                 <option value="S">Small</option>
                 <option value="M">Medium</option>
                 <option value="L">Large</option>
                 <option value="XL">Extra Large</option>   
             </select>
            </div>

        </div>
        );
    }
}

export default Filter