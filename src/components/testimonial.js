import React from "react";

function Testimonial() {
    return (
        <section id="Testimonial" className="container">
            <article className="text-center fw-bolder fs-2 pb-4">Testimonial</article>

            <section>
                {/* <!-- Carousel --> */}
                <section id="demo" className="carousel slide" data-bs-ride="carousel">

                    {/* <!-- Indicators/dots --> */}
                    <section className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0"
                            className="active bg-secondary rounded-circle me-3" style={{height:'10px',width:'10px'}}></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="bg-dark rounded-circle"
                        style={{height:'10px',width:'10px'}}></button>
                    </section>

                    {/* <!-- The slideshow/carousel --> */}
                    <section className="carousel-inner pb-5">
                        <section className="carousel-item active">
                            <section className="row">
                                <section className="col-md-6 d-flex">
                                    <section>
                                        <figure><img className="img-fluid" src="images/Archiweb-images/Ellipse 9.png"
                                            alt="" /></figure>
                                    </section>
                                    <section className="ps-4">
                                        <b className="fs-4">James Passaquindici Arcand</b>
                                        <p>
                                            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br />
                                            aliquam, purus sit amet luctus
                                            venenatis
                                        </p>
                                    </section>
                                </section>

                                <section className="col-md-6 d-flex">
                                    <section>
                                        <figure><img className="img-fluid" src="images/Archiweb-images/Ellipse 10.png"
                                            alt="" /></figure>
                                    </section>
                                    <section className="ps-4">
                                        <b className="fs-4">Abram Schleifer</b>
                                        <p>
                                            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br />
                                            aliquam, purus sit amet luctus
                                            venenatis
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>

                        <section className="carousel-item">
                            <section className="row">
                                <section className="col-md-6 d-flex">
                                    <section>
                                        <figure><img className="img-fluid" src="images/Archiweb-images/Ellipse 9.png"
                                            alt="" /></figure>
                                    </section>
                                    <section className="ps-4">
                                        <b className="fs-4">James Passaquindici Arcand</b>
                                        <p>
                                            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br />
                                            aliquam, purus sit amet luctus
                                            venenatis
                                        </p>
                                    </section>
                                </section>

                                <section className="col-md-6 d-flex">
                                    <section>
                                        <figure><img className="img-fluid" src="images/Archiweb-images/Ellipse 10.png"
                                            alt="" /></figure>
                                    </section>
                                    <section className="ps-4">
                                        <b className="fs-4">Abram Schleifer</b>
                                        <p>
                                            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br />
                                            aliquam, purus sit amet luctus
                                            venenatis
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>

    );
}

export default Testimonial;