import React from 'react';
import { Route } from 'react-router-dom';
import Holidays from '../Holidays/Holidays';
import Home from '../Home/Home';

const Dashboard = () => {
    return(
        <div className="my-3 my-md-5">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12">

                    <Route path="/" exact component={Home} />
                    <Route path="/holidays" exact component={Holidays} />                

                </div>
            </div>
        </div>
    );
}

export default Dashboard;