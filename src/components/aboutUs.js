import React from "react";

function AboutUs() {
    return (
        <section id="About-us" className="container">
            <section className="row py-5">
                <section className="col-md-7">
                    <section>
                        <figure className="my-0">
                            <img className="img-fluid"
                                src="images/Archiweb-images/pexels-anete-lusina-4792491 1.png"  style={{ height: "400px" }} alt="about-us-image" />
                        </figure>
                    </section>
                </section>
                <section className="col-md-5">
                    <section>
                        <b className="fs-1 fw-bolder">About Us</b>
                        <p className="fs-31">
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit ut <br />
                            aliquam, purus sit amet luctus <br />
                            venenatis, lectus magna fringilla <br />
                            urna, porttitor
                        </p>

                        <article className="fw-bold" id="read-more">Read More</article>
                    </section>
                </section>
            </section>
        </section>
    );

}

export default AboutUs;