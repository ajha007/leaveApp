import React from 'react';
import Holidays from '../Holidays/Holidays';

const Dashboard = () => {
    return(
        <div class="my-3 my-md-5">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">
                        Dashboard
                    </h1>
                </div>
                <div class="row row-cards">
                   
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-red mr-3">
                                    <i class="fe fe-users"></i>
                                </span>
                                <div>
                                    <h4 class="m-0"><a href="javascript:void(0)">1,352 <small>Members</small></a></h4>
                                    <small class="text-muted">163 registered today</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card p-3">
                            <div class="d-flex align-items-center">
                                <span class="stamp stamp-md bg-yellow mr-3">
                                    <i class="fe fe-message-square"></i>
                                </span>
                                <div>
                                    <h4 class="m-0"><a href="javascript:void(0)">132 <small>Comments</small></a></h4>
                                    <small class="text-muted">16 waiting</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-6 col-lg-3">
                    <Holidays />        
                </div>
                <div class="row row-cards row-deck">
                    
                    
                </div>
                <div class="row row-cards row-deck">
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;