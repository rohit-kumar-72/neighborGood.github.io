import React from 'react'

function Footer() {
    return (

        <div className="my-5" style={{ minWidth: "100vw", margin: "0px" }}>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3" style={{ minWidth: "100%" }}>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold py-4">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white">AboutUS</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">ContactUs</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">PrivacyPolicy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Whether Today</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold py-4">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p><i className="fas fa-home mr-3"></i> India, In 10012, Up</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@neighborgood.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 91 2345 6788 99</p>
                                <p><i className="fas fa-print mr-3"></i> + 91 2345 6789 76</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", marginBottom: "-50px" }}
                >
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"
                    >neighborgood.com</a
                    >
                </div>
            </footer>

        </div>
    )
}

export default Footer