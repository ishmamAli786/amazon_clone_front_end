import React from 'react'

function Footer() {
    return (
        <>
            {/*Footer Start*/}
            <div className="container-fluid bg-dark   font-weight-bold px-0">
                <a href="#pageTop" className="btn btn-block btn-dark mb-5">Back To Top</a>
                <div className="container">
                    <div className="row text-white mb-5">
                        <div className="col-md-3">
                            <h5>Get To Know Us</h5>
                            <a href="#" className="text-white">About</a><br />
                            <a href="#" className="text-white">Careers</a><br />
                            <a href="#" className="text-white">Press Release</a><br />
                            <a href="#" className="text-white">Investment</a><br />
                            <a href="#" className="text-white">Offers</a>
                        </div>
                        <div className="col-md-3">
                            <h5>Connect With Us</h5>
                            <a href="#" className="text-white">Facebook</a><br />
                            <a href="#" className="text-white">Twitter</a><br />
                            <a href="#" className="text-white">Instagram</a><br />
                        </div>
                        <div className="col-md-3">
                            <h5>Make Money With Us</h5>
                            <a href="#" className="text-white">Sell On Amazon</a><br />
                            <a href="#" className="text-white">Affiliate Marketing</a><br />
                            <a href="#" className="text-white">Fullfilment Center</a><br />
                            <a href="#" className="text-white">Advertise Your Product</a><br />
                            <a href="#" className="text-white">Amazon Pay</a>
                        </div>
                        <div className="col-md-3">
                            <h5>Let Us Help You</h5>
                            <a href="#" className="text-white">COVID-19 And Amazon</a><br />
                            <a href="#" className="text-white">Your Account</a><br />
                            <a href="#" className="text-white">Return</a><br />
                            <a href="#" className="text-white">Funding</a><br />
                            <a href="#" className="text-white">Help</a>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider mt-5" />
                <div className="row mt-3 mx-0 px-0">
                    <div className="col-md-12 text-center">
                        <img src="assets/img/logo1.png" alt="logo footer" width={100} height={30} />
                    </div>
                </div>
                {/*Sub Footer Start*/}
                <div className="py-3 mt-3 shadow-lg" style={{ backgroundColor: '#131a22', fontSize: '12px' }}>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-3">
                                <p>Get To Know Us</p>
                                <a href="#" className="text-white">About</a><br />
                                <a href="#" className="text-white">Careers</a><br />
                                <a href="#" className="text-white">Press Release</a><br />
                                <a href="#" className="text-white">Investment</a><br />
                                <a href="#" className="text-white">Offers</a>
                            </div>
                            <div className="col-md-3">
                                <p>Connect With Us</p>
                                <a href="#" className="text-white">Facebook</a><br />
                                <a href="#" className="text-white">Twitter</a><br />
                                <a href="#" className="text-white">Instagram</a><br />
                            </div>
                            <div className="col-md-3">
                                <p>Make Money With Us</p>
                                <a href="#" className="text-white">Sell On Amazon</a><br />
                                <a href="#" className="text-white">Affiliate Marketing</a><br />
                                <a href="#" className="text-white">Fullfilment Center</a><br />
                                <a href="#" className="text-white">Advertise Your Product</a><br />
                                <a href="#" className="text-white">Amazon Pay</a>
                            </div>
                            <div className="col-md-3">
                                <p>Let Us Help You</p>
                                <a href="#" className="text-white">COVID-19 And Amazon</a><br />
                                <a href="#" className="text-white">Your Account</a><br />
                                <a href="#" className="text-white">Return</a><br />
                                <a href="#" className="text-white">Funding</a><br />
                                <a href="#" className="text-white">Help</a>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-12 text-center text-white">
                                <p><i className="far fa-copyright" />1996-2020 Amazon.Com Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>{/*Sub Footer Start*/}
            </div>
        </>
    )
}

export default Footer;
