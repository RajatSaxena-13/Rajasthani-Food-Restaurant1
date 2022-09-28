import React from 'react'

import {Link} from 'react-router-dom'
const Resetpassword = () => {

    const click = () =>{
        const femail = document.getElementById("fmail").value;

        var formstatus = true;
        var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!epattern.test(femail)) {
            formstatus = false;
            document.getElementById("fmail").style.borderColor = "red";
        } else {
            document.getElementById("fmail").style.borderColor = "green";
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <section className='container'>
                                        <h3>Reset Your Password</h3>
                                        <br />
                                        <p>We'll email you instructions to reset the password.</p>
                                        <br />
                                        <h4>Email</h4>
                                        <input type="text" className='form-control' id="fmail"/>
                                        <button className='btn btn-primary form-control mt-4' onClick={click}>Reset password</button>
                                        <Link to="/login" className="mylink"><h5 className='mt-4'><a href='/login' className='mt-4' data-bs-dismiss="modal">Return to login</a></h5></Link>
                                        <button type="button" className="btn btn-secondary mt-4 text-center" data-bs-dismiss="modal">Close</button>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword
