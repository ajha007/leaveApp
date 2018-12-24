import React from 'react';
import Holidays from '../Holidays/Holidays';

const Dashboard = () => {
    return(
        <div className="my-3 my-md-5">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">
                        Dashboard
                    </h1>
                </div>
                <div className="row row-cards">
                   
                    <div className="col-sm-6 col-lg-3">
                        <div className="card p-3">
                            <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-red mr-3">
                                    <i className="fe fe-users"></i>
                                </span>
                                <div>
                                    <h4 className="m-0"><a href="javascript:void(0)">1,352 <small>Members</small></a></h4>
                                    <small className="text-muted">163 registered today</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card p-3">
                            <div className="d-flex align-items-center">
                                <span className="stamp stamp-md bg-yellow mr-3">
                                    <i className="fe fe-message-square"></i>
                                </span>
                                <div>
                                    <h4 className="m-0"><a href="javascript:void(0)">132 <small>Comments</small></a></h4>
                                    <small className="text-muted">16 waiting</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-6 col-lg-3">
                    <Holidays />        
                </div>
                <div className="row row-cards row-deck">
                    
                    
                </div>
                <div className="row row-cards row-deck">
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;