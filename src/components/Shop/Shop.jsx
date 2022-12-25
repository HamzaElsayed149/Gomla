import React ,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Shop() {
  
    let [Categories,setCategories]= useState([])
    let [Items,setItems]= useState([])
  
    useEffect(() => {
    getCategories()
    getItems()
    },[])
    async  function getCategories() {
        let {data} =   await axios.get(`https://fakestoreapi.com/products/categories`) 
        setCategories(data)
        }
        async  function getItems() {
         let {data} =   await axios.get(`https://fakestoreapi.com/products`) 
         setItems(data)
       
         }  
         async  function getSpecific (Cat) {
            let {data} =   await axios.get(`https://fakestoreapi.com/products/category/${Cat}`) 
            setItems(data)
          console.log(data);
            }  
  
  return (
    <div className="container">
    <h1 className=' position-relative py-3'>Shop </h1>

    <div className=" row py-3 mb-5">
    <div className="col-md-2">
        <h4 className=' tag-ss position-relative mb-3'>Categories</h4>
        <div className='d-sm-flex d-md-block justify-content-between align-items-center ps-2'>

        <h6 className='hover pe-3' onClick={getItems}>All</h6>
        {Categories?.map(Cat=>
                      <div key={Cat} className="col-md-3 my-2 pe-3">
                        <h6 className='hover mb-2' onClick={(e)=>getSpecific(Cat)}>{Cat.toUpperCase()}</h6>
</div>)}
    </div>
    </div>

    <div className="col-md-10 d-flex">
<div className="row">

      {Items?.map(item=>
      <Link key={item.id}  to={`/Details/`+item.category+`/`+item.id} className="col-md-3 my-2 text-decoration-none text-black">
             <div >
                <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4 flex-column'>
                  <img height='300px' className='w-100 mb-4' src={item.image} alt="" />
                  <h5 className='mb-3'>{item.title.split(" ").splice(0,3).join(" ")}</h5>
                  <h6 className='fs-3 text-text-black-50'>${item.price}</h6>
                </div>
</div>
      </Link>
         )}


         
  
  </div>
  </div>
  </div>
  </div>

  )
}
