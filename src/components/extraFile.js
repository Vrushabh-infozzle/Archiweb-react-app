import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";


function Projects() {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };



    return (
        <section id="Our-project" class="container">
            <section class="row">
                <section class="col-md-6">
                    <b class="fs-1 fw-bolder">Our Projects</b>
                </section>
                <section class="col-md-6 tabSection">
                    <section id="allData" className={activeTab === 'all' ? 'activeBtn' : ''} onClick={() => handleTabClick('all')}>All</section>
                    <section id="furnitureData" className={activeTab === 'furniture' ? 'activeBtn' : ''} onClick={() => handleTabClick('furniture')}>Furniture</section>
                    <section id="designdata" className={activeTab === 'design' ? 'activeBtn' : ''} onClick={() => handleTabClick('design')}>Design</section>
                    <section id="houseData" className={activeTab === 'house' ? 'activeBtn' : ''} onClick={() => handleTabClick('house')}>House</section>
                </section>
            </section>

            {/* <!-- all data --> */}
            <section className="py-4 dataSection row">
                {activeTab === 'all' && <div className="allData row groups">All Projects Content0...</div>}
                {activeTab === 'furniture' && <div className="furnitureData d-none row groups">Furniture Projects Content...</div>}
                {activeTab === 'design' && <div className="designdata d-none row groups">Design Projects Content...</div>}
                {activeTab === 'house' && <div className="houseData d-none row groups">House Projects Content...</div>}
            </section>
        </section>

    );
}


<section className={activeTab === 'all' ? 'row py-4' : 'row py-4 d-none'}>All Data ...</section>

{/* <!-- furniture data --> */ }
<section className={activeTab === 'furniture' ? 'row py-4 groups' : 'row py-4 furniture d-none groups'}>
    <section className=" offset-md-4 col-md-4 fs-1 bg-warning rounded text-white text-center">Furniture data....
    </section>
</section>

{/* <!-- Design data --> */ }
<section className={activeTab === 'design' ? 'row py-4 furniture groups' : 'row py-4 d-none groups'}>
    <section className=" offset-md-4 col-md-4 fs-1 bg-warning rounded text-white text-center">Design data....
    </section>
</section>

{/* <!-- house data --> */ }
<section className={activeTab === 'house' ? 'row py-4' : 'row py-4 d-none'}>
    <section className=" offset-md-4 col-md-4 fs-1 bg-warning rounded text-white text-center">House data....
    </section>
</section>


function Projects() {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section id="Our-project" class="container">
            <section class="row">
                <section class="col-md-6">
                    <b class="fs-1 fw-bolder">Our Projects</b>
                </section>
                <section class="col-md-6 tabSection">
                    <section id="allData" className={activeTab === 'all' ? 'activeBtn' : ''} onClick={() => handleTabClick('all')}>All</section>
                    <section id="furnitureData" className={activeTab === 'furniture' ? 'activeBtn' : ''} onClick={() => handleTabClick('furniture')}>Furniture</section>
                    <section id="designdata" className={activeTab === 'design' ? 'activeBtn' : ''} onClick={() => handleTabClick('design')}>Design</section>
                    <section id="houseData" className={activeTab === 'house' ? 'activeBtn' : ''} onClick={() => handleTabClick('house')}>House</section>
                </section>
            </section>

            {/* <!-- all data --> */}
            {/* <section className="py-4 dataSection">
        {activeTab === 'all' && <div className="allData row groups">All Projects Content0...</div>}
        {activeTab === 'furniture' && <div className="furnitureData d-none row groups">Furniture Projects Content...</div>}
        {activeTab === 'design' && <div className="designdata d-none row groups">Design Projects Content...</div>}
        {activeTab === 'house' && <div className="houseData d-none row groups">House Projects Content...</div>}
        </section> */}

            <section className="row allData groups">All Data ...</section>

            {/* <!-- furniture data --> */}
            <section className="row furnitureData d-none groups">Furniture data
            </section>

            {/* <!-- Design data --> */}
            <section className="row designdata d-none groups">Design data
            </section>

            {/* <!-- house data --> */}
            <section className="row houseData d-none groups"><b className="text-center fs-1 bg-warning text-white">housedta data</b>
            </section>
        </section>

    );
}


export default Projects;