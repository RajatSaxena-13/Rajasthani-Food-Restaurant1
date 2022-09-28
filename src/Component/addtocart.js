import React, { useState } from 'react'


import image from '../images/food/a.jpg'
import image1 from '../image1/yy.jpg'

const Addtocart = () => {

    const [add, updateadd] = useState(0);
    const [second, updatesecond] = useState(0);
    const [dateitem, pickdate] = useState("");

    const one = () => {
        updateadd(add - 1)
    }
    const two = () => {
        updateadd(add + 1)
    }
    const three = () => {
        updatesecond(second - 1)
    }
    const four = () => {
        updatesecond(second + 1)
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-12 continue-shopping'>
                    <h3><i className="fa fa-long-arrow-left"></i> Continue Food</h3>
                    <button type="button" className="btn btn-dark button-set">
                        <span className="glyphicon glyphicon-shopping-cart icon"></span> <span className='ShoppingCart'>Shopping Cart</span>
                    </button>
                </div>
            </div>
            {/* -- Completed-- */}

            <section>
                <div className='row'>
                    <div className='col-lg-12 main-cart-section mx-5'>
                        <h2>Shopping Cart</h2>
                        <p className='count'>You Have <span className='total-count'>4</span> Item In Shooping Cart</p>
                    </div>
                </div>
            </section>
            {/* -- Completed-- */}

            <section>
                <div className='row mt-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 text-center mx-5' >
                        <img src={image} className=" img-fluid"></img>
                    </div>
                    <div className='col-lg-2 text-center mt-4'>
                        <button className='btn btn-success button-count mx-1' onClick={one}>-</button>
                        <button className='btn btn-primary'>{add}</button>
                        <button className='btn btn-success button-count mx-1' onClick={two}>+</button>
                    </div>
                    <div className='col-lg-2 text-center mt-4'>
                        <h3>250 --/Rs</h3>
                    
                    </div>
                    <div className='col-lg-2 text-center mt-3'>
                        <button className='btn btn-danger'> X  </button>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </section>
            {/* -- Completed-- */}

            <section>
                <div className='row mt-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 text-center mx-5' >
                        <img src={image1} className=" img-fluid"></img>
                    </div>
                    <div className='col-lg-2 text-center mt-4'>
                        <button className='btn btn-success button-count mx-1' onClick={three}>-</button>
                        <button className='btn btn-primary'>{second}</button>
                        <button className='btn btn-success button-count mx-1' onClick={four}>+</button>
                    </div>
                    <div className='col-lg-2 text-center mt-4'>
                        <h3>250 --/Rs</h3>
                    </div>
                    <div className='col-lg-2 text-center mt-3'>
                        <button className='btn btn-danger'> X  </button>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </section>
        </div>

    )
}

export default Addtocart;