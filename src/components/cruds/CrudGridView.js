 import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CrudGridView() {
    const [cruds, setCruds] = useState([])
    useEffect(function () {
        async function getCruds() {
            try {
                const response = await axios.get("http://localhost:8080/api/cruds");
                setCruds(response.data);
            } catch (error) {
                console.log("error", error);
            }
        }
        getCruds();
    }, []);
    return (
        <div className="container">
            <h2>
                Urbanic vender - Grid View
                <p>
                    <Link to="/cruds/new" className="btn btn-primary float-right">
                        Create vender
                    </Link>
                </p>
            </h2>
            <hr />
            <div>
                <div className="d-flex flex-wrap">
                    {cruds.map((crud) => {
                        return (
                            <div
                                className="card"
                                style={{ width: 250, margin: 30 }}
                                key={crud._id}
                            >
                                <div class="card-header">
                                    <h5 className="card-title">
                                        <Link to={`/cruds/${crud._id}`}
                                            className="link-line">
                                            {crud.companyName}
                                        </Link>
                                    </h5>
                                </div>
                              
                                    <div class="card-body">
        
                                     <h5 class="d-flex align-items-center">
          
                                    <span class="bi bi-telephone-fill text-success"></span>
                                    <a className="card-subtitle" href={`tel:+${crud.phone}`}>{crud.phone}</a>
                                    </h5>
                                    <p className="card-text limit-char">{crud.description}</p>
                                    

                             
                             <p className="card-text d-flex align-items-center">
                             <i class="bi bi-geo-alt-fill text-info"><span class="text-dark">{crud.location}</span></i>
                             
                               </p>
                                </div>
                                <div class="card-footer d-flex align-items-center">
                                    <Link
                                        to={`/cruds/${crud._id}/edit`}
                                        className="btn btn-primary"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        to={`/cruds/${crud._id}/delete`}
                                        className="btn btn-danger" style={{marginLeft:"6em"}}
                                    >
                                        Delete
                                    </Link>

                                    <span>
                                        <small>
                                            <Link
                                                to={`/cruds/${crud._id}`} className="link-line">

                                            </Link>
                                        </small>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default CrudGridView;
