
import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                {/* // <!-- ##### Breadcrumb Area Start ##### --> */}
                <div className="vizew-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // <!-- ##### Login Area Start ##### --> */}
                <div className="vizew-login-area section-padding-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6">
                                <div className="login-content">
                                    {/* <!-- Section Title --> */}
                                    <div className="section-heading">
                                        <h4>Great to have you back!</h4>
                                        <div className="line"></div>
                                    </div>

                                    <form action="index.html" method="post">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email or User Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                <label className="custom-control-label" for="customControlAutosizing">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn vizew-btn w-100 mt-30">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;