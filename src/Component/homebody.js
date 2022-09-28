import React from 'react'
import {Link} from 'react-router-dom'

import video from '../video/BG-video.mp4'

import image13 from '../images/slide/pasta.jpg'
import image14 from '../images/breakfast/breakfast.jpg'
import image15 from '../images/lunch/bgimg1.jpg'
import image16 from '../images/dinner/dinner.jpg'
import image17 from '../images/dinner/dinner1.jpg'
import image18 from '../images/breakfast/breakfast1.jpg'
import image19 from '../images/lunch/lunch1.jpg'
import image20 from '../images/news/feature.jpg'
import image21 from '../images/news/feature1.jpg'
import image22 from '../images/news/feature2.jpg'
import image23 from '../images/news/chiken.jpg'
import image24 from '../images/news/men.jpg'
const Homebody = () => {
    return (
        <div className='container-fluid'>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-6 keyframe'>
                        <h1 className='Delicious1 col-sm-6 display-2'>Delicious<br /> Steaks</h1>
                        <div className='rate mt-4'>
                            <h3>4.4/5</h3>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <p className='From'>From 1,206+ Customer Reviews</p>
                    </div>
                    <div className='col-lg-6'>
                        <img src={image13} className="img-fluid Delicious" alt="Responsive image"></img>
                        {/* <h4>Sausage Pasta</h4>
                        <div className='rate3 mx-5'>
                            <h4>5.3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'>94 Reviews</p>
                        </div> */}

                        
                        {/* <div className="carousel-caption col-6">
                            <span className="text-black">
                                <i class="bi-geo-alt me-2"></i>
                                Manhattan, New York
                            </span>

                            <h4 className="text-black">Fine Dining Restaurant</h4>
                        </div> */}
                    </div>
                </div>
                {/* <div class="video-wrap" >
                <video autoPlay loop muted width="100%">
                  <source src={video} type="video/mp4"/>
                </video>
                </div>
                <div class="overlay"></div> */}
            </section>
            {/* -- Body Completed-- */}

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h1 className='text-center display-4 Special'>Special Menus</h1>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>

                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <img src={image14} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-1 '>Morning Fresh</h4>
                        <button className='btn btn-warning Breakfast mt-2 div '>Breakfast</button>
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
                            <p className='review'>102 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image15} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Tooplate Soup</h4>
                        <button className='btn btn-warning Breakfast div'>Lunch</button>
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
                            <p className='review'> 50 Reviews</p>
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
                            <p className='review'>50 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image16} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Premium Steak</h4>
                        <button className='btn btn-warning Breakfast div'>Dinner</button>
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
                            <p className='review'> 86 Reviews</p>
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
                            <p className='review'>86 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image17} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Seafood Set</h4>
                        <button className='btn btn-warning Breakfast div'>Dinner</button>
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
                            <p className='review'> 48 Reviews</p>
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
                            <p className='review'>48 Reviews</p>
                        </div>

                    </div>
                    <div className='col-lg-4'>
                        <img src={image18} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Burger Set</h4>
                        <button className='btn btn-warning Breakfast div'>Breakfast</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        {/* <div className='rate mt-2'>
                            <h3>5.3/5</h3>
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
                            <h4>5.3/5</h4>
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
                    <div className='col-lg-4'>
                        <img src={image19} className="img-fluid" alt="Responsive image"></img>
                        <h4 className='mt-2'>Healthy Soup</h4>
                        <button className='btn btn-warning Breakfast div'>Lunch</button>
                        <button className='btn btn-danger mt-1 OrderNow'>Order Now</button>
                        {/* <div className='rate mt-2'>
                            <h3>2.3/5</h3>
                            <div className='rating mx-1 mt-1 col-12 col-sm-12'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'> 86 Reviews</p>
                        </div> */}
                        <div className='rate mt-2'>
                            <h4>2.3/5</h4>
                            <div className='rating mx-1 col-9  col-sm-9'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p className='review'>86 Reviews</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h1 className='text-center display-4 Special'>News & Events</h1>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}


            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={image20} className="img-fluid" alt="Responsive image "></img>
                        <div className='Feature mx-2'>
                            <Link to ="/feature"><button className='btn btn-danger'>Feature</button></Link>
                            <h4 className='text-white'>Healthy Lifestyle and happy living tips</h4>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={image21} className="img-fluid" alt="Responsive image"></img>
                        <div className='Feature mx-2 container'>
                        <Link to ="/feature"><button className='btn btn-danger'>Feature</button></Link>
                            <h4 className='text-white'>How to make a healthy meal</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image22} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>Promotion</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2 Coconut'><a href='#'>Is Coconut good for you?</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image23} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>News</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2'><a href='#'>Salmon Steak Noodle</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image24} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>Promotion</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2'><a href='#'>Making a healthy salad</a></h4>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
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

export default Homebody
