import React from 'react'

import image1 from '../image1/f.jpg'
import image2 from '../image1/l.jpg'
import image3 from '../image1/i.jpg'
import image4 from '../image1/g.jpg'
import image5 from '../image1/s.jpg'
import image6 from '../image1/v.jpg'
import image7 from '../image1/aa.jpg'
import image8 from '../image1/t.jpg'
import image9 from '../image1/wq.jpg'
import image10 from '../image1/e.jpg'
import image11 from '../image1/rt.jpg'
import image12 from '../image1/zx.jpg'
import image13 from '../image1/oo.jpg'
const Menulistbody = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5 '>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h1 className='text-center text-white display-1  col-11  Story contrast1'>Spicy Dishes</h1>
                    <img src={image13} className="img1 img-fluid contrast shadow"></img>
                    <p className='text-center text-white display-6 col-11 Story1 contrast1 '>this is how our kitchen evolved in new digital era</p>
                </div>
            </div>
            <section className='container'>
                <div className='row mt-5'>
                    <h2>Menu - List - Card</h2>
                </div>
                <div className='div4'>

                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h4 className='text-center AllTimeFavourite'>All Time Favourite</h4>
                    </div>
                </div>
            </section>
            {/* -- Section Completed-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image1} className=" img-fluid rounded-circle " width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            French Fries	-- 106/-<br />
                            Chilli Cheese Toast 	-- 115/-<br />
                            Chilli Cheese Gralic Toast 	-- 115/-<br />
                            Garlic Bread	-- 98/-<br />
                            Garlic Bread with Cheese	-- 119/-
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image2} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Dosa (Butter)	-- 125/-<br />
                            Onion Dosa (Butter)	-- 136/-<br />
                            Paper Dosa	-- 130/-<br />
                            Rawa Dosa	-- 119/-<br />
                            Mysore Dosa	-- 123/-
                        </p>
                    </div>
                </div>
            </section>

            {/* -- Section Complete-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image3} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Tandoori Paneer Tikka	-- 220/-<br />
                            Malai Paneer Tikka	-- 220/-<br />
                            Soya Tandoori Tikka 	-- 175/-<br />
                            Punjabi Soya Chap	-- 179/-<br />
                            Dahi ke Kabab	-- 179/-
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image4} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Onion Uttapam	-- 155/-<br />
                            Tomato Uttapam	-- 175/-<br />
                            Mix Veg Uttapam	-- 140/-<br />
                            Mix Masala Uttapam	-- 195/-<br />
                            Mix dry Uttapam	-- 210/-
                        </p>
                    </div>
                </div>
            </section>
            {/* -- Section Complete-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image5} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Plain Sandwich	-- 175/-<br />
                            Grilled Sandwich	-- 175/-<br />
                            Club Sandwich	-- 175/-<br />
                            Punjabi Sandwich	-- 179/-<br />
                            Normal Sandwich	-- 179/-
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image6} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Dal Makhani	-- 192/-<br />
                            Yellow Dal	-- 141/-<br />
                            Rajma 	-- 141/-<br />
                            Chole 	-- 141/-<br />
                            Panjabi Dal	-- 179/-
                        </p>
                    </div>
                </div>
            </section>
            {/* -- Section Complete-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image7} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu shadow'>
                            Chicken Curry	-- 255/-<br />
                            Chicken Briyani	-- 215/-<br />
                            Chicken Masala	-- 250/-<br />
                            Chicken Fry	-- 270/-<br />
                            Chicken Tikka	-- 350/-<br />
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image8} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu1 shadow'>
                            Sambhar Rice	132/-<br />
                            Curd Rice	132/-<br />
                        </p>
                    </div>
                </div>
            </section>
            {/* -- Section Complete-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image9} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu2 shadow'>
                            Gulab Jamun	-- 60/-<br />
                            Rava Kesri -- 72/-<br />
                            Halwa (Seasonal)	-- 60/-
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image10} className=" img-fluid rounded-circle" width="30%" ></img>
                        <p className='mx-5 menu3 '>
                            Plain Cheese Pizza	-- 190/-<br />
                            Capsicum, Onion Pizza	-- 210/-<br />
                            Tomato, Onion Pizza	-- 210/-<br />
                            Tandoori Pizza	-- 250/-
                        </p>
                    </div>
                </div>
            </section>
            {/* -- Section Complete-- */}

            <section className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 menucard'>
                        <img src={image11} className=" img-fluid rounded-circle" width="30%" ></img>
                        <p className='mx-5 menu4 shadow'>
                            Tandoori Roti	-- 30/-<br />
                            Butter Roti	-- 36/-<br />
                            Roomali Roti	-- 17/-<br />
                            Laccha Parantha	-- 53/-
                        </p>
                    </div>
                    <div className='col-lg-6 menucard'>
                        <img src={image12} className=" img-fluid rounded-circle" width="30%"></img>
                        <p className='mx-5 menu3 '>
                            Tea	40/-<br />
                            Coffee Mocachino	51/-<br />
                            Coffee Americano (Black)	55/-<br />
                            Ice Tea (Lemon)	51/-
                        </p>
                    </div>
                </div>
            </section>
            {/* -- Section Complete-- */}

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

export default Menulistbody
