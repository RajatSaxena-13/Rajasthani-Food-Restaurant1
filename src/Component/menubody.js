import React from 'react'


import image1 from '../images/header/y.jpg'
import image2 from '../images/breakfast/breakfast.jpg'
import image3 from '../images/breakfast/breakfast2.jpg'
import image4 from '../images/dinner/dinner.jpg'
import image5 from '../images/news/feature.jpg'
import image6 from '../images/news/feature1.jpg'
import image7 from '../images/dinner/dinner1.jpg'
import image8 from '../images/dinner/dinner.jpg'
import image9 from '../images/dinner/dinner2.jpg'
const Menubody = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h1 className='text-center text-white display-1  col-11  Story contrast1'>Our Menus</h1>
                    <img src={image1} className="img1 img-fluid contrast shadow"></img>
                    <p className='text-center text-white display-6 col-11 Story1 contrast1 '>this is how our kitchen evolved in new digital era</p>
                </div>
            </div>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5 mx-5  '>
                    <div className='col-lg-12'>
                        <h2 className='BreakfastMenu'>Breakfast Menu</h2>
                        <div className='div4'>

                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-4 mt-5'>
                        <img src={image2} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Morning Fresh</h4>
                        <button className='btn btn-warning Breakfast div'>Breakfast</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        
                        <div className='rate mt-2'>
                            <h4>4.4/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review1 mt-1'>102 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4 mt-5'>
                        <img src={image3} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Morning Fresh</h4>
                        <button className='btn btn-warning Breakfast div'>Lunch</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        <div className='rate mt-2'>
                            <h4>4.3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review1 mt-1'>115 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4 mt-5'>
                        <img src={image4} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Morning Fresh</h4>
                        <button className='btn btn-warning Breakfast div'>Dinner</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        <div className='rate mt-2'>
                            <h4>4.5/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review1 mt-1'>109 Reviews</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5 mx-5  '>
                    <div className='col-lg-12'>
                        <h2 className='BreakfastMenu'>Lunch Menu</h2>
                        <div className='div4'>

                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={image5} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mx-3 mt-2'>Super Steak Set</h4>
                        <div className='rate mx-3'>
                            <h4>3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review1 mt-1'>84 Reviews</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={image6} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mx-3 mt-2'>Bread & Steak Set</h4>
                        <div className='rate mx-3'>
                            <h4>4.3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review1 mt-1'>88 Reviews</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5 mx-5  '>
                    <div className='col-lg-12'>
                        <h2 className='BreakfastMenu'>Dinner Menu</h2>
                        <div className='div4'>

                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5 '>
                <div className='col-lg-4'>
                        <img src={image7} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Seafood Set</h4>
                        <button className='btn btn-warning Breakfast div'>Breakfast</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        {/* <div className='rate mt-2'>
                            <h3>4.4/5</h3>
                            <div className='rating mx-1 mt-1 col-12 col-sm-12'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'> 94 Reviews</p>
                        </div> */}
                        <div className='rate mt-2'>
                            <h4>4.4/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'>94 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image8} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Premium Steak</h4>
                        <button className='btn btn-warning Breakfast div'>Breakfast</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        {/* <div className='rate mt-2'>
                            <h3>3/5</h3>
                            <div className='rating mx-1 mt-1 col-12 col-sm-12'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'> 56 Reviews</p>
                        </div> */}
                        <div className='rate mt-2'>
                            <h4>3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'>56 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image9} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Salmon Set</h4>
                        <button className='btn btn-warning Breakfast div'>Breakfast</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        {/* <div className='rate mt-2'>
                            <h3>3/5</h3>
                            <div className='rating mx-1 mt-1 col-12 col-sm-12'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'> 94 Reviews</p>
                        </div> */}
                        <div className='rate mt-2'>
                            <h4>3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'>94 Reviews</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row '>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h2 className='Rajasthani'>Rajasthani Delights Food Kitchen</h2>
                    </div>
                </div>
            </section>
            {/* -- Secion Completed-- */}
            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <h3>Location</h3>
                        <p>121 Einstein Loop N, Bronx, NY 10475,<br /> United States</p>
                        <button className='btn btn-success '>Direction</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <h3>Opening Hours</h3>
                        <p>Monday - Friday</p>
                        <p>Monday - Friday</p>
                        <p>Tel: 010-02-0340</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4 font'>
                        <i className='fa fa-facebook mx-2 facebook'></i>
                        <i className='fa fa-instagram mx-2 instagram'></i>
                        <i className='fa fa-twitter mx-2 twitter '></i>
                        <i className="fa fa-youtube mx-2 youtube"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menubody
