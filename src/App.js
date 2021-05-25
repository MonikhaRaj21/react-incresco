import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
//import data from './data.json';
import data1 from './data1.json';

class App extends React.Component {
  
  constructor(){
    //const srt="",sz="";
    super();
    this.state={
      products:data1.products,
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
  filterGender=(event)=>{
    
    /*this.setState((state)=>({
      sort:event.target.value,
      products:state.products
    }));*/
    const gender = data1.products.filter((product)=>product.gender.includes(event.target.value))
    if(event.target.value===""){
      console.log("Empty"+event.target.value);
      this.setState({size:event.target.value,products:data1.products})
    }
    else{
      console.log(event.target.value);
      this.setState({
        size:event.target.value,
        products:gender,
      });
    }
  };
  filterCategory=(event)=>{
    if(event.target.value===""){
      console.log("Empty"+event.target.value);
      this.setState({size:event.target.value,products:data1.products})
    }
    else{
    const category = data1.products.filter((product)=>product.category.includes(event.target.value))
    console.log(event.target.value);
      this.setState({
        size:event.target.value,
        products:category,
      });
    }
  }
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
          filterGender={this.filterGender}
          filterCategory={this.filterCategory}>
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
