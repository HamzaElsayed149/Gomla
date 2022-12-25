import React from 'react'

export default function Cart(props) {
    console.log(props.CartItems);
  return (
    <div className='mt-5 py-2 text-center'>
                    <h1 className='mb-5'>CART</h1>

        <div className="container">
            <div className="row">
                {props.CartItems?.map((ele)=>
                    <div key={ele.id} className="col-12 mb-5 bg-light p-3 rounded-2n">
                        <div className="row m-auto">
                    <div  className="col-md-4 mb-3 text-center">
                        <img height='180px' className='w-75' src={ele.image} alt="" />
                   </div>
                   <div className="col-md-8 mb-3 pt-2 text-lg-start">
                        <h2 className='mb-3'>{ele.title}</h2>
                        <h4 className='text-black-50 mb-3'>${ele.price}</h4>
                    <div className='d-flex justify-content-center justify-content-lg-start mb-4'>
                        <p className='me-3 fs-5'>Quantity:</p>
                        <button className='btn btns  fw-bold ' onClick={()=>props.RemoveItem(ele)}>-</button>
                        <h4 className='px-2'>{ele.quantity}</h4>
                        <button className='btns btn me-5' onClick={()=>props.AddItem(ele)}>+</button>
                    </div>
                    <button className='btn btn-danger' onClick={()=>props.RemoveProduct(ele)}>delet <i class="fa-solid fa-trash"></i></button>

                    </div>         
                    </div>
                    </div>)}
                    {props.CartItems.length ===0 ? <h4>Cart Is Empty</h4>: <div className='d-flex flex-column justify-content-center pb-3 mb-1'>
                        <div className='d-flex justify-content-center   '>
                        <h5 className='pe-3 fs-3'>Total:</h5>
                    <h5 className='fs-3'>${props.total.toFixed(2)}</h5>
                        </div>
                  <div className='pb-5'>
<button className='btn btns  mb-5 fw-bold '>Buy Now</button>

</div>   </div>}


               
                </div>
            </div>
        </div>

  )
}
