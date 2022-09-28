import React from 'react'

const Register = () => {

    const save = () => {
        const fname = document.getElementById("name").value;
        const lname = document.getElementById("lname").value;
        const number = document.getElementById("numr").value;
        const email = document.getElementById("e-mail").value;
        const pass = document.getElementById("pass").value;
        const cpass = document.getElementById("cpass").value;

        var formstatus = true;
        if (fname == "") {
            formstatus = false;
            document.getElementById("name").style.borderColor = "red";
        } else {
            document.getElementById("name").style.borderColor = "green";
        }

        if (lname == "") {
            formstatus = false;
            document.getElementById("lname").style.borderColor = "red";
        } else {
            document.getElementById("lname").style.borderColor = "green";
        }
        if (number == "" || number.length < 10) {
            formstatus = false;
            document.getElementById("numr").style.borderColor = "red";
        } else {
            document.getElementById("numr").style.borderColor = "green";
        }
        var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!epattern.test(email)) {
            formstatus = false;
            document.getElementById("e-mail").style.borderColor = "red";
        } else {
            document.getElementById("e-mail").style.borderColor = "green";
        }
        if (pass == "" || pass.length < 6 || pass != cpass) {
            formstatus = false;
            document.getElementById("pass").style.borderColor = "red";
            document.getElementById("cpass").style.borderColor = "red";
        } else {
            document.getElementById("pass").style.borderColor = "green";
            document.getElementById("cpass").style.borderColor = "green";
        }


    }
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-lg-12'>
                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title text-success" id="exampleModalLabel1" >Register</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <p className='mx-3 mt-3 text-warning'>Please fill in this form to create an account.</p>
                                <div className="modal-body">

                                    <section className='register-Bg'>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <h5>First Name</h5>
                                                <input type="text" className='form-control' placeholder='Full Name' id="name" />
                                                <br />
                                                <h5>Number</h5>
                                                <input type="number" className='form-control' placeholder='Mobile Number' id="numr" />
                                                <br />
                                                <h5>Password</h5>
                                                <input type="password" className='form-control' placeholder='***-***-****' id="pass" />
                                            </div>
                                            <div className='col-lg-6'>
                                                <h5>Last Name</h5>
                                                <input type="text" className='form-control' placeholder='Last Name' id="lname" />
                                                <br />
                                                <h5>Email</h5>
                                                <input type="email" className='form-control' placeholder='Your@gmail.com' id="e-mail" />
                                                <br />
                                                <h5>Confirm Password</h5>
                                                <input type="password" className='form-control' placeholder='***-***-****' id="cpass" />
                                            </div>
                                        </div>

                                        {/* --Section Completed-- */}

                                        <section className='text-center'>
                                            <button className='btn btn-primary mt-4 text-center' onClick={save}>Register</button>
                                            <button className='btn btn-warning mt-4 mx-5 text-center'>Clear All</button>
                                            <button className='btn btn-danger mt-4 text-center' data-bs-dismiss="modal">Close</button>
                                        </section>
                                    </section>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
