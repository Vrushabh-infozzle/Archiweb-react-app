import React, { useState, useEffect } from "react";
import $ from "jquery";

function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const [projectData, setProjectData] = useState(null);
    const [initialData, setDisplayData] = useState([]);

    useEffect(() => {
        $.getJSON("/project.json", (data) => {
            setProjectData(data); // Store the full data in state
            setDisplayData(data.allProjectData.filter(item => !item.furnitureData && !item.designData && !item.houseData)); // Display 'all' items excluding nested arrays
        });
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        if (tab === "all") {
            setDisplayData(
                projectData.allProjectData.filter(item => !item.furnitureData && !item.designData && !item.houseData)
            );
        } else if (tab === "furniture") {
            const furnitureItems = projectData.allProjectData.find(item => item.furnitureData)?.furnitureData || [];
            setDisplayData(furnitureItems);
        } else if (tab === "design") {
            const designItems = projectData.allProjectData.find(item => item.designData)?.designData || [];
            setDisplayData(designItems);
        } else if (tab === "house") {
            const houseItems = projectData.allProjectData.find(item => item.houseData)?.houseData || [];
            setDisplayData(houseItems);
        }
    };

    const showData = (jsonData) => {
        if (!jsonData || jsonData.length === 0) return <p>No data available</p>;
        
        return jsonData.map((eachProperty, index) => (
            <section key={index} className="col-md-4">
                <section className="text-center">
                    <figure className="my-0">
                        <img className="img-fluid" src={eachProperty.image} alt={`img${index}`} />
                    </figure>
                    <p dangerouslySetInnerHTML={{ __html: eachProperty.newData }}></p>
                </section>
            </section>
        ));
    };

    return (
        <section id="Our-project" className="container">
            <section className="row">
                <section className="col-md-6">
                    <b className="fs-1 fw-bolder">Our Projects</b>
                </section>
                <section className="col-md-6 tabSection">
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
