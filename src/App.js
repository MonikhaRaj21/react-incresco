import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    };
  }
  sortProducts = (event) => {
    console.log(event.target.value);
    const sort=event.target.value;
    this.setState((state)=>({
      sort:sort,
      products:this.state.products.slice().sort((a,b) => 
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
      :sort==="highest" 
        ?a.price > b.price
        ? -1
        : 1
      :a._id>b._id
        ? 1
        : -1
      ),
    }))
  };
  filterProducts=(event)=>{
    
    /*this.setState((state)=>({
      sort:event.target.value,
      products:state.products
    }));*/
    if(event.target.value===""){
      console.log("Empty"+event.target.value);
      this.setState({size:event.target.value,products:data.products})
    }
    else{
      console.log(event.target.value);
      this.setState({
        size:event.target.value,
        products:data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0),
      });
    }
  };
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">INCRESCO PRODUCT DISCOVERY</a>
      </header>
      <main>
        <div className="content">
        <div className="sidebar">
        <Filter count={this.state.products.length}
          sort={this.state.sort}
          size={this.state.size}
          sortProducts={this.sortProducts}
          filterProducts={this.filterProducts}>
        </Filter>
          </div>
          <div className="main">
            
            <Products products={this.state.products}>

            </Products>
          </div>
          
          
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
  }
}

export default App;
