import React from "react";
function Home() {
    const link = "https://github.com/Gkkandu";
    const target = "_blank";
    return (
        <div className="container">
            <h1>Urbanic Venders</h1>
            
            <p>
                <b>Front-end</b>: React.js v17+ with RRDv6+
            </p>
            <p>
                <b>Back-end</b>: Node.js, Express.js
            </p>
            <p>
                <b>Database</b>: MongoDB Atlas with Mongoose ODM
            </p>
            <p>
                <b>Developed By</b>: Gaurav maddheshiya
                <p>
                    <a href={link} target={target}>
                        Contact.Us
                    </a>
                </p>
            </p>
        </div>
    );
}
export default Home;
