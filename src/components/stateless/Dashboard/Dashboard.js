import React from 'react';
import { Route } from 'react-router-dom';
import Holidays from '../Holidays/Holidays';
import Home from '../Home/Home';
import LeaveApply from '../LeaveApply/LeaveApply';

const Dashboard = () => {
    return(
        <div className="my-3 my-md-5">
            <div className="container">

                    <Route path="/" exact component={Home} />
                    <Route path="/holidays" exact component={Holidays} />
                    <Route path="/leave-apply" exact component={LeaveApply} />

            </div>
        </div>
    );
}

export default Dashboard;
