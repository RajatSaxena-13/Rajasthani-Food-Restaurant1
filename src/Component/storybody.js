import React from 'react'

import image10 from '../images/header/kag.jpg'
import image11 from '../images/team/g.jpg'
import image12 from '../images/team/k.jpg'
import image13 from '../images/team/l.jpg'
import image14 from '../images/q.jpg'

const Storybody = () => {
  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
          <h1 className='text-center text-white display-1  col-11  Story contrast1'>Kitchen's Story</h1>
          <img src={image10} className="img1 img-fluid contrast shadow"></img>
          <p className='text-center text-white display-6 col-11 Story1 contrast1 '>Perfect for all Breakfast, Lunch and Dinner</p>
        </div>
      </div>
      {/*--Section Complete--*/}

      <section className='container'>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <h2><span className='text-info'>Rajasthani Delights Food</span> is the latest Bootstrap 5<br /> HTML template provided by Tooplate<br /> website.</h2>
            <div>
              <button className='btn btn-warning  text-white'>Cheak Out News</button>
              <button className='btn btn-danger mx-5  text-white'>Say Hi</button>
            </div>
          </div>
          <div className='col-lg-6'>
            Since this website template is 100% free to use, you can edit and apply<br /> it for your commercial restaurant websites. <span className='text-success'>There are 6 HTML pages<br /> included in this template. Please click "Reservation" button on the<br /> top right to see the pop-up reservation form.<br /><br /></span>

            You are NOT allowed to redistribute the template ZIP file on any<br /> template donwnload website. Please contact us for more information.
          </div>
        </div>
      </section>
      {/*--Section Complete--*/}

      <section className='container'>
        <div className='row mt-5'>
          <div className='col-lg-12'>
            <h2 className='display-5 Team'>Team Members</h2>
          </div>
        </div>
      </section>
      {/*--Section Complete--*/}

      <section className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <img src={image11} className=" img-fluid img2"></img>
            <div className='name'>
              <h4>Sophia</h4>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <img src={image12} className=" img-fluid img2"></img>
            <div className='name'>
              <h4>Benjamin W.</h4>
              <p>Restaurant Manager</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <img src={image13} className=" img-fluid img2"></img>
            <div className='name'>
              <h4>Muchen Jack</h4>
              <p>Senior Chef</p>
            </div>
          </div>
        </div>
      </section>

      {/*--Section Complete--*/}

      <section className='container'>
        <div className='row text-center  Newsletter'>
          <div className='col-lg-6'>
            <img src={image14} className=" img-fluid rounded-circle img3"></img>
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

      {/*--Section Complete--*/}

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

export default Storybody;
