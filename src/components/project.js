import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";



function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const [projectData, setProjectData] = useState(''); // for accesing json data anywhere
    const [initialData, setdisplayData] = useState([]);



    // Fetch the data when the component mounts
    useEffect(() => {
        $.getJSON("/project.json", (data) => {
            setProjectData(data); // Store the full data in state
            setdisplayData(data.allPorjectData); // Initially display 'all' tab data
        });
    }, []);


    //Here assign the data according to active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === "all") {
            setdisplayData(projectData.allPorjectData);
        } else if (tab === "furniture") {
            setdisplayData(projectData.furnitureData);
        } else if (tab === "design") {
            setdisplayData(projectData.designData);
        } else if (tab === "house") {
            setdisplayData(projectData.houseData);
        }
    };


    //here displaying the data
    const showData = (jsonData) => {
        return jsonData.map((eachProperty, index) => (
            <section key={index} className="col-md-4">
                <section className="text-center">
                    <figure className="my-0">
                        <img className="img-fluid" src={eachProperty.image} alt={`img${index}`} />
                    </figure>
                    <p dangerouslySetInnerHTML={{ __html: eachProperty.newData }}></p>
                    {/* <p>{`${eachProperty.newData}`}</p> */}
                </section>
            </section>
        ));
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

            <section className="py-4 dataSection">
                <section className="row">{showData(initialData)}</section>
            </section>
        </section>

    );
}

export default Projects;