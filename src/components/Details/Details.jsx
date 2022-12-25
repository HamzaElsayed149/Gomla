
import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

export default function Details(props) {
    let [details,setdetails]= useState(null)

    let {id} = useParams()

    async  function getdetails() {
        let {data} =   await axios.get(`https://fakestoreapi.com/products/${id}`) 
        setdetails(data)
          }
          useEffect(() => {
            getdetails()
          },)
  return (
<div className="container py-5 mt-5">
<div className="row ">
        <div className="col-md-4">
        <img src={details?.image} className="w-100 rounded-2" alt="" />
        </div>
        <div className="col-md-8 pt-1">
<h2 className='mb-3 '>{details?.title}</h2>
<h3 className='fw-bold mb-3'>${details?.price}</h3>
<p className='text-black-50 mb-3'>{details?.description}</p>
<Link className=' fw-bold rounded-4  btn  btns me-3  px-5 py-2 shadow-sm' onClick={()=>props.AddItem(details)} >Add To Cart</Link>

        </div>
      </div>

</div>  )
}
