import React from 'react'

import image1 from '../images/header/q.jpg'
import video from '../video/background.mp4'
import image2 from '../images/author/t.jpg'
import image3 from '../images/author/a.jpg'
import image4 from '../images/news/feature2.jpg'
import image5 from '../images/news/chiken.jpg'
import image6 from '../images/news/men.jpg'
import image7 from '../images/q.jpg'
const Feature = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 mt-5'>
                    <h1 className='Learning'>Learning a fine dining experience</h1>
                </div>
                <div className='col-lg-12 mt-5'>
                    <img src={image1} className="img-fluid experience" alt="Responsive image"></img>
                </div>
                <div className='col-lg-12 mt-5'>
                    <h2>The best fine-dining experience at Food Kitchen</h2>
                </div>
            </div>
            {/* ----Completed-- */}

            <div className='row'>
                <div className='col-lg-10 mt-5'>
                    <p className='Phasellus'>Phasellus in augue at quam ornare malesuada. Sed magna lorem, dapibus nec lorem sed, pretium vulputate ante. In porttitor sapien urna, eu vulputate arcu pharetra non. Vivamus nec nulla quis leo sodales semper. Quisque sed ultricies tortor. Fusce porta pretium tellus, sit amet vulputate orci.</p>
                    <ul>
                        <li>Pasta stats published in the International</li>
                        <li>Rice flour, or legumes such as beans</li>
                        <li>Belgian family developed major food poisoning symptoms</li>
                    </ul>
                    <p className='Phasellus'>Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste</p>
                </div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-12 mt-5'>
                    <video autoPlay loop muted width="100%">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-10 mt-5'>
                    <p className='Phasellus'>Food Kitchen is free Bootstrap 5 HTML template provided by Tooplate. You are free to use this layout for commercial purposes. You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.</p>
                </div>
                <div className='col-lg-10 mt-5'>
                    <h3 className='Phasellus1'>Pasta with Cream Sauce Recipe</h3>
                </div>
                <p className='Phasellus mt-5'>Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste</p>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 mt-5'>
                    <h2 className='text-center'>Comment  Box</h2>
                </div>
                <div className='col-lg-3'></div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 mt-3' >
                    <input type="text" className='form-control  input' placeholder='Full Name' />
                    <br />
                    <input type="text" className='form-control  input' placeholder='Your Email' />
                    <br />
                    <textarea className='form-control  input' placeholder='Address' rows={5}></textarea>
                </div>
                <div className='col-lg-3'></div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 text-center mt-4'>
                    <button className='btn btn-dark   SUBMIT'>SUBMIT</button>
                </div>
                <div className='col-lg-3'></div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 Donec mt-5'>
                    <img src={image2} className="img-fluid rounded-circle" alt="Responsive image" width={90}></img>
                    <p className='pharetra'>Donec pharetra tellus nulla, aliquam<br /> elementum lorem hendrerit non.<br />
                        <span className='text-warning David'>David Martin</span></p>
                    <p>14 hours ago</p>
                </div>
                <div className='col-lg-3'></div>
            </div>
            {/* -- Completed-- */}


            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 Donec mt-5'>
                    <img src={image3} className="img-fluid rounded-circle" alt="Responsive image" width={90}></img>
                    <p className='pharetra'>Quisque non libero mauris, aliquam<br /> elementum lorem hendrerit non.<br />
                        <span className='text-warning David'>Jessica Noel</span></p>
                    <p>3 hours ago</p>
                </div>
                <div className='col-lg-3'></div>
            </div>
            {/* -- Completed-- */}

            <div className='row'>
                <div className='col-lg-12 text-center mt-5'>
                    <h1 className='RelatedNews'>Related News</h1>
                </div>
            </div>
            {/* -- Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image4} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>Promotion</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2 Coconut'><a href='#'>Is Coconut good for you?</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image5} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>News</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2'><a href='#'>Salmon Steak Noodle</a></h4>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <img src={image6} className="img-fluid" alt="Responsive image"></img>
                        <button className='btn btn-warning btn-sm mt-1 div1 shadow'>Promotion</button>
                        <span className='mx-5 April'>8 April 2022</span>
                        <h4 className='mt-2'><a href='#'>Making a healthy salad</a></h4>
                    </div>
                </div>
            </section>
            {/* -- Completed-- */}

            <section className='container'>
                <div className='row text-center  Newsletter'>
                    <div className='col-lg-6'>
                        <img src={image7} className=" img-fluid rounded-circle img3"></img>
                    </div>
                    <div className='col-lg-4'>
                        <h3>Our Newsletter</h3>
                        <p>The food news every day</p>
                        <input type="text" className='form-control' /><br />
                        <button className='btn btn-dark form-control'>SUBSCRIBE</button>
                        <p className='text-primary mt-2'>By signing up, you agree to our Privacy Notice and the data policy</p>
                    </div>
                </div>
            </section>
            {/* -- Completed-- */}

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

export default Feature
