import React from 'react'

import {Link} from 'react-router-dom'
const Login = () => {

  
  
  const save = () => {
    var fname = document.getElementById("usrname").value;
    var pass = document.getElementById("psw").value;
    // var cheak = document.getElementById("ckbox").value;
    var formstatus = true;			
				if(fname==""){
					formstatus=false;
					document.getElementById("usrname").style.borderColor="red";
				}else{
				    document.getElementById("usrname").style.borderColor="green";
				}
        if(pass=="" || pass.length<10){
          formstatus=false;
          document.getElementById("psw").style.borderColor="red";
        }else{
          document.getElementById("psw").style.borderColor="green";
        }
        // if(checkbox==""){
				// 	formstatus=false;
				// 	document.getElementById("ckbox").style.borderColor="red";
				// }else{
				//     document.getElementById("ckbox").style.borderColor="green";
				// }

  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* <div class="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
                  </div> */}
                  <h5 className="modal-title mainlogintext text-info" id="staticBackdropLabel">Login</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <section className='container'>
                    <h5>User Name</h5>
                    <input type="text" className='form-control' placeholder='Full Name' id="usrname" required/>
                    <br />
                    <h5>Password</h5>
                    <input type="password" className='form-control' placeholder='Password' id="psw"/>
                    <button className='btn btn-primary form-control mt-3' onClick={save} >Login</button>
                    <input type="checkbox" className='mt-4' id="ckbox"/> Remember Me
                  </section>
                  <hr />
                  {/* -- Section Completed-- */}
                  <section className='container'>
                    <div className='row'>
                      <div className='col-lg-6 col-sm-6 col-md-6 col-6'>
                        <button className='btn btn-danger' data-bs-dismiss="modal">Cancel</button>
                      </div>
                      <div className='col-lg-6 col-sm-6 col-md-6 col-6 text-center'>
                        <Link to="/resetpassword" className="mylink"><a href='#' className='ForgetPassword' data-bs-toggle="modal" data-bs-target="#exampleModal">Forget Password??</a></Link>
                      </div>
                    </div>
                  </section>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
