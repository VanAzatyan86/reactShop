
import React from 'react';
import './App.scss';

class App extends React.Component{ 
  products=[
    {id: 1,title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
    {id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    {id: 3, title: "Mens Cotton Jacket",image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",}
  ]

 state={
      id:"",
      img:"",
      title:""
 }

 render(){
  const addElements = (a,b,c) => {
   this.setState({
    id:a,
    img:b,
    title:c
   })
  }
  return(
    <div>
          <div className='allProduct'>
            {this.products.map(item=>{
               return(
        
             <div className='product'>
                <h1>{item.id}</h1>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <button onClick={() => addElements(item.id,item.image,item.title)}>click</button>
              </div>
              )
            })}
          </div>

           <div>
             <div className='myState'>
                <h1>{this.state.id}</h1>
               <img src={this.state.img} alt="" />
               <p>{this.state.title}</p>
              </div>
  </div>
  </div>
  )
  }

}

export default App;
