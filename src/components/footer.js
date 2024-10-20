import React from "react";

function Footer(){
    return(
        <footer id="contact-us" className="row bg-dark text-white">
            <section className="col-md-12">
                <section className="container">
                    <section className="row py-5 gy-4">
                        <section className="col-md-4">
                            <section>
                                <b className="fs-3">ArchiWeb</b>
                                <p className="pt-2 text-verylight">
                                    Archiweb is an architectural <br/> consultant based in Berlin, <br/> Germany. We
                                    provide solutions for <br/> your architecture and residential <br/> design
                                </p>
                            </section>

                            <section className="social-icon">
                                <a href="javascript:void(0)"><i className="text-white bi bi-facebook pe-3"></i></a>
                                <a href="javascript:void(0)"><i className="text-white bi bi-twitter pe-3"></i></a>
                                <a href="javascript:void(0)"><i className="text-white bi bi-instagram pe-3"></i></a>
                            </section>
                        </section>

                        <section className="col-md-3">
                            <section>
                                <b className="fs-3">Articles</b>
                                <p className="pt-2 text-verylight">
                                    7 Tips for Kids Friendly <br/> Interior Design <br/> Smart Tips for Changing <br/> a
                                    Room Eco-friendly design
                                </p>
                            </section>
                        </section>

                        <section className="col-md-2">
                            <section>
                                <b className="fs-3">Links</b>
                                <article className="pt-2">
                                    <article><a href="javascript:void(0)"
                                            className="text-verylight text-decoration-none">Link
                                            1</a></article>
                                    <article><a href="javascript:void(0)"
                                            className="text-verylight text-decoration-none">Link
                                            2</a></article>
                                    <article><a href="javascript:void(0)"
                                            className="text-verylight text-decoration-none">Link
                                            3</a></article>
                                </article>
                            </section>
                        </section>
                        <section className="col-md-3">
                            <section>
                                <b className="fs-3">Location</b>

                                <article className="google-map pt-2">
                                    <iframe className="img-fluid"
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </footer>

    );
}

export default Footer;