import React from 'react'

const Reservation = () => {

    const save = () =>{
        var fname = document.getElementById("fname").value;
        var number = document.getElementById("num").value;
        var date = document.getElementById("date").value;
        var email = document.getElementById("email").value;
        var person = document.getElementById("person").value;
        var time = document.getElementById("time").value;
        var request = document.getElementById("request").value;

        var formstatus = true;	
        if(fname==""){
            formstatus=false;
            document.getElementById("fname").style.borderColor="red";
        }else{
            document.getElementById("fname").style.borderColor="green";
        }
        if(number=="" || number.length<10){
            formstatus=false;
            document.getElementById("num").style.borderColor="red";
        }else{
            document.getElementById("pasnums").style.borderColor="green";
        }
        if(date==""){
            formstatus=false;
            document.getElementById("date").style.borderColor="red";
        }else{
            document.getElementById("date").style.borderColor="green";
        }
        if(email==""){
            formstatus=false;
            document.getElementById("email").style.borderColor="red";
        }else{
            document.getElementById("email").style.borderColor="green";
        }
        if(person==""){
            formstatus=false;
            document.getElementById("person").style.borderColor="red";
        }else{
            document.getElementById("person").style.borderColor="green";
        }
        if(time==""){
            formstatus=false;
            document.getElementById("time").style.borderColor="red";
        }else{
            document.getElementById("time").style.borderColor="green";
        }
        if(request==""){
            formstatus=false;
            document.getElementById("request").style.borderColor="red";
        }else{
            document.getElementById("request").style.borderColor="green";
        }

    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title" id="exampleModalLabel2">Reserve a table</h2>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <section className='reservation-bg'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <h5>Full Name</h5>
                                                <input type="text" className='form-control' placeholder='Full Name' id="fname"/>
                                                <br/>
                                                <h5>Mobile Number</h5>
                                                <input type="text" className='form-control'  placeholder='123-456-7890' id="num"/>
                                                <br/>
                                                <h5>Date</h5>
                                                <input type="date" className='form-control' id="date"/>
                                            </div>
                                            <div className='col-lg-4'>
                                                <h5>Email Address</h5>
                                                <input type="text" className='form-control'  placeholder='Your@gmail.com' id="email"/>
                                                <br/>
                                                <h5>No of Person</h5>
                                                <input type="text" className='form-control'  placeholder='12 Person' id="person"/>
                                                <br/>
                                                <h5>Time</h5>
                                                <input type="time" className='form-control' id="time" />
                                            </div>
                                        </div>
                                    
                                    {/* -- Section Completed-- */}

                                    <section>
                                        <div className='row mt-5'>
                                            <div className='col-lg-8'>
                                                <h5>Special Request</h5>
                                                <textarea rows={5} className='form-control' id="request" placeholder='Write..........'></textarea>
                                            </div>
                                        </div>
                                    </section>
                                     {/* -- Section Completed-- */}

                                     <section>
                                        <div className='row mt-4'>
                                            <div className='col-lg-8 text-center'>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button className='btn btn-primary mx-5' onClick={save}>Submit Request</button>
                                            </div>
                                        </div>
                                     </section>
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

export default Reservation
