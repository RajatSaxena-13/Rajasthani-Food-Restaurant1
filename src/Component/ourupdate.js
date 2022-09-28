import React from 'react'

import image1 from '../images/news/cy.jpg'
import image2 from '../images/news/feature.jpg'
import image3 from '../images/news/feature1.jpg'
import image4 from '../images/news/feature2.jpg'
import image5 from '../images/news/chiken.jpg'
import image6 from '../images/news/men.jpg'

const Ourupdate = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h1 className='text-center text-white display-1  col-11  Story contrast1'>News & Events</h1>
                    <img src={image1} className="img1 img-fluid contrast shadow"></img>
                    <p className='text-center text-white display-6 col-11 Story1 contrast1 '>our latest updates, news, events and special promotions</p>
                </div>
            </div>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <h2 className='BreakfastMenu'>Latest Updates</h2>
                </div>
                <div className='div4'>

                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={image2} className="img-fluid" alt="Responsive image"></img>
                        <div className='Feature mx-2'>
                            <button className='btn btn-danger'>Feature</button>
                            <h4 className='text-white'>Healthy Lifestyle and happy living tips</h4>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={image3} className="img-fluid" alt="Responsive image"></img>
                        <div className='Feature mx-2 container'>
                            <button className='btn btn-danger'>Feature</button>
                            <h4 className='text-white'>How to make a healthy meal</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image4} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1'>Promotion</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2 Coconut'><a href='#'>Is Coconut good for you?</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image5} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1'>News</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2'><a href='#'>Salmon Steak Noodle</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image6} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1'>Promotion</button>
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

export default Ourupdate
