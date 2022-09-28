import React from 'react'

import image1 from '../images/header/b.jpg'

const Contactbody = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h1 className='text-center text-white display-1  col-11  Story contrast1'>Say Hi</h1>
                    <img src={image1} className="img1 img-fluid contrast shadow"></img>
                    <p className='text-center text-white display-6 col-11 Story1 contrast1 '>We are happy to get in touch with you</p>
                </div>
            </div>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h2 className='BreakfastMenu'>Leave a message</h2>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <form className="custom-form contact-form row" action="#" method="post" role="form">
                            <div className="col-lg-6 col-6">
                                <label for="contact-name" class="form-label">Full Name</label>

                                <input type="text" name="contact-name" id="contact-name" className="form-control mt-2" placeholder="Your Name" required />
                            </div>
                            <div className="col-lg-6 col-6">
                                <label for="contact-phone" class="form-label">Phone Number</label>

                                <input type="telephone" name="contact-phone" id="contact-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control mt-2" placeholder="123-456-7890" />
                            </div>
                            <div className="col-12">
                                <label for="contact-email" className="form-label mt-3">Email</label>

                                <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Your Email" required="" />

                                <label for="contact-message" className="form-label mt-3">Message</label>

                                <textarea className="form-control" rows="5" id="contact-message" name="contact-message" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-lg-5 col-12">
                                <button type="submit" className="btn btn-primary mt-3">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-lg-5 mt-5 mx-5'>
                        <h5 className=''>Weekdays</h5>

                        <div className="d-flex mb-lg-3">
                            <p className=''>Monday to Friday</p>

                            <p className="ms-5 week1">10:00 AM - 08:00 PM</p>
                        </div>

                        <h5 className=''>Weekends</h5>

                        <div className="d-flex">
                            <p className=''>Saturday and Sunday</p>

                            <p className="ms-5 ">11:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row'>
                    <div className="col-lg-12">
                        <h4 className="mt-5 mb-4 mx-5 ">121 Einstein Loop N, Bronx, NY 10475, United States</h4>

                        <div className="google-map pt-3">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14920.891757756479!2d-73.83496372506556!3d40.8623107607295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28cbc17f4a0c3%3A0x9ae0f1e804a817d!2s121%20Einstein%20Loop%20N%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2sth!4v1650470337727!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
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

export default Contactbody
