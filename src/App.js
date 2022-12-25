import './App.css';
import {  RouterProvider, createHashRouter  } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';
import Mainlayout from './components/Mainlayout/Mainlayout.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart'
import { useState } from 'react';

function App() {

let[CartItems,SetCartItems]=useState([])

function AddItem(Item) {
  let exist = CartItems.find((ele)=>ele.id === Item.id)
  if(exist){
    let update =CartItems.map((ele)=>ele.id === Item.id?{...exist,quantity:exist.quantity+1}:ele)
    SetCartItems(update)

  }else{
    let cart =[...CartItems,{...Item,quantity:1}]
    SetCartItems(cart)
    console.log(CartItems);
  }
}
function RemoveItem(Item) {
  let exist = CartItems.find((ele)=>ele.id === Item.id)
  if(exist.quantity >1){
    let update =CartItems.map((ele)=>ele.id === Item.id?{...exist,quantity:exist.quantity - 1}:ele)
    SetCartItems(update)

  }else{
    RemoveProduct(Item)
  }
}

function RemoveProduct(Item) {
let cart =CartItems.filter((ele)=>ele.id !==Item.id)
SetCartItems(cart)
}
let total = CartItems.reduce((x,y)=>x+ y.quantity*y.price,0);
  const routers =  createHashRouter([
    {path:'/',element:<Mainlayout CartItems={CartItems}/>,children:[
      {path:'/',element: <Home/>},  
      {path:'shop',element: <Shop/>},  
      {path:'Details/:type/:id',element:<Details AddItem={AddItem}/>},
      {path:'Cart',element:<Cart total={total} CartItems={CartItems} RemoveProduct={RemoveProduct} AddItem={AddItem} RemoveItem={RemoveItem}/>},

      {path:'*',element: <NotFound/>},  
    ]}
  ])
  return (
    <RouterProvider router={routers}> </RouterProvider>
  );
}

export default App;
