import React ,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import HeroImg from '../../Images/[removal.ai]_tmp-63a33885bb265_XC56GA.png'
import ManImg from '../../Images/turacoon_banner.png'


export default function Home() {
  let [Categories,setCategories]= useState([])
  let [Items,setItems]= useState([])
  let [Recent,setRECENT]= useState([])

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
  setRECENT(data.splice(6,6))

  }
  return (
    <div className='py-5 mt-5'>
      <div className="container">

        {/*HERO SECTION*/ }
        <div className="row mb-5 ">
          <div className="col-md-6 my-5 mb-5   text-center text-lg-start">
            <h1>Select Your New <br /> Perfect Style</h1>
            <p className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.
            <br/>dolor sit amet dolor sit amet dolor sit amet</p>
            <Link className=' fw-bold rounded-4  btn btns  me-3  px-5 py-2 shadow-sm' to='Shop'>Shop Now</Link>
                </div>
          <div className="col-md-6 mb-5">
  <img className='w-100' src={HeroImg} alt="" />
          </div>
          <div className="col-md-3 mt-2 ">
            <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4'>
            <i className=" colored-icon fa-solid fa-gears me-2 fs-4"></i>    
            <h5 className='mb-0'>Quality Product</h5>
            </div>
          </div>
          <div className="col-md-3 mt-2 ">
            <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4'>
            <i className=" colored-icon fa-solid fa-gears me-2 fs-4"></i>    
            <h5 className='mb-0'>Free Shipping</h5>
            </div>
          </div>
          <div className="col-md-3 mt-2 ">
            <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4'>
            <i className=" colored-icon fa-solid fa-gears me-2 fs-4"></i>    
            <h5 className='mb-0'>14-Day Return</h5>
            </div>
          </div>
          <div className="col-md-3 my-2 ">
            <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4'>
            <i className="colored-icon fa-solid fa-gears me-2 fs-4"></i>    
            <h5 className='mb-0'>24/7 Support</h5>
            </div>
          </div>        
        </div>

        {/*CATEGORIES SECTION*/ }
        <div className="row py-5">
          <h3 className='tag position-relative mb-5'>CATEGORIES</h3>
            {Categories?.map(Cat=>
                      <div key={Cat} className="col-md-3 my-2">
                      <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4'>
                      <h5 className='mb-0'>{Cat}</h5>
                      </div>
</div>)}
        </div>


        {/*FEATURED PRODUCTS SECTION*/ }
        <div className="row py-5 mb-5">
          <h3 className='tags position-relative mb-5'>FEATURED PRODUCTS</h3>
            {Items?.splice(0,6).map(item=>
            <Link key={item.id} to={`Details/`+item.category+`/`+item.id} className="col-md-4 my-2 text-decoration-none text-black">
                   <div >
                      <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4 flex-column'>
                        <img height='300px' className='w-100 mb-4 ' src={item.image} alt="" />
                        <h5 className='mb-3'>{item.title.split(" ").splice(0,4).join(" ")}</h5>
                        <h6 className='fs-3 text-text-black-50'>${item.price}</h6>
                      </div>
</div>
            </Link>
               )}
        </div>

        {/*Special Offer SECTION*/ }

        <div className="row py-5 mb-5">
              <div className="col-md-6 bg-light d-flex p-5 align-items-center flex-column flex-lg-row ">
              <div className="col-md-6  py-5 d-flex flex-column justify-content-center align-items-center text-md-center text-sm-start ">
                <h3 className='fs-1'>Special Offer</h3>
              <h5 className= ' fs-3 mb-3 colored'>Save 20%</h5>
              <button className='  btn btns  me-3  px-5 py-3 shadow-sm rounded-5 ' >
                <Link className='text-decoration-none  text-white fw-bold' to='Shop'>ShopNow</Link>

              </button>
              </div>
              <div className=" col-md-12 col-lg-6">
                <img className='w-100 pt-3' src={HeroImg} alt="" />
                </div>
              </div>
              <div className="col-md-6 colored-bg d-flex  align-items-center  flex-column flex-lg-row">
              <div className="col-md-6  py-5 d-flex flex-column justify-content-center align-items-center text-md-center text-sm-start">
              <h3 className='fs-1'>Special Offer</h3>
              <h5 className='fs-3 mb-3'>Save 20%</h5>
              <button className='  btn  me-3  px-5 py-3 rounded-5 shadow-sm bg-white' >
                <Link className='text-decoration-none  colored fw-bold' to='Shop'>ShopNow</Link>
              </button>

              </div>

              <div className="col-md-12 col-lg-6"><img className='w-100 pt-3' src={ManImg} alt="" /></div>

              </div>
        </div>

        {/*RECENT PRODUCTS SECTION*/ }

        <div className="row py-5 mb-5">
          <h3 className='tags position-relative mb-5'>RECENT PRODUCTS</h3>
            {Recent?.map(item=><Link key={item.id} to={`Details/`+item.category+`/`+item.id} className="col-md-4 my-2 text-decoration-none text-black">
              <div  >
                      <div className='d-flex bg-light justify-content-center align-items-center p-3 rounded-4 flex-column'>
                        <img height='300px' className='w-100 mb-4 ' src={item.image} alt="" />
                        <h5 className='mb-3'>{item.title.split(" ").splice(0,4).join(" ")}</h5>
                        <h6 className='fs-3 '>${item.price}</h6>
                      </div>
</div>
            </Link>
                      )
}
        </div>

      </div>
    </div>
  )
}
