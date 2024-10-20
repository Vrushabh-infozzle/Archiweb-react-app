// src/components/Services.js
import React from 'react';

function Services() {
    return (
        <section id="Our-Services" className="row bg-grey">
            <b className="text-center fs-1 py-2">Our Services</b>
            <section className="col-md-4">
                <section className="text-center py-3">
                    <figure className="my-0"><img className="img-fluid" src="images/Archiweb-images/Group 4.png"
                        alt="planning-image"/></figure>
                    <b className="fs-3">Planning</b>
                    <p>
                        Our Services Line one <br/> Servive line two
                    </p>
                </section>
            </section>
            <section className="col-md-4">
                <section className="text-center py-3">
                    <figure className="my-0"><img className="img-fluid" src="images/Archiweb-images/Group 5.png"
                        alt="planning-image"/></figure>
                    <b className="fs-3">Interior</b>
                    <p>
                        Our Services Line one <br/> Servive line two
                    </p>
                </section>
            </section>
            <section className="col-md-4">
                <section className="text-center py-3">
                    <figure className="my-0"><img className="img-fluid" src="images/Archiweb-images/Group 6.png"
                        alt="planning-image"/></figure>
                    <b className="fs-3">Exterior</b>
                    <p>
                        Our Services Line one <br/> Servive line two
                    </p>
                </section>
            </section>
        </section>
    );
}

export default Services;
