import React from 'react';
import Aux from '../../../hoc/Auxi';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import './react-big-calendar.css';


const home = () => {
  // const localizer = BigCalendar.momentLocalizer(moment) ;
//   const events = [
//   {
//       start: '2018-12-5',
//       end: '2018-12-08',
//       eventClasses: 'Event 1',
//       title: 'test event',
//       description: 'This is a test description of an event',
//   },
//   {
//       start: '2018-12-5',
//       end: '2018-12-08',
//       eventClasses: 'Event 2',
//       title: 'test event',
//       description: 'This is a test description of an event',
//   },
//   {
//       start: '2018-12-5',
//       end: '2018-12-08',
//       eventClasses: 'Event 3',
//       title: 'test event',
//       description: 'This is a test description of an event',
//   },
//   {
//       start: '2018-12-5',
//       end: '2018-12-08',
//       eventClasses: 'Event 4',
//       title: 'test event',
//       description: 'This is a test description of an event',
//   },
//   {
//       start: '2018-12-19',
//       end: '2018-12-21',
//       title: 'test event',
//       description: 'This is a test description of an event',
//       data: 'you can add what ever random data you may want to use later',
//   },
// ];
//     let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const allData = {
    "code": 200,
    "message": "Success",
    "empID": "271",
    "empCode": 180,
    "leaveBalanace": 8,
    "IsPL": "False",
    "data": [
        {
            "day": "Monday",
            "date": "2018-12-24T00:00:00+00:00",
            "employeeName": [
                "Ankit Katiyar",
                "Biswajit Sur",
                "Deepu Shivhare",
                "Ganesh Paul",
                "Jasmeet Singh Saran"
            ]
        },
        {
            "day": "Tuesday",
            "date": "2018-12-25T00:00:00+00:00",
            "employeeName": [
                "Christmas Day"
            ]
        },
        {
            "day": "Wednesday",
            "date": "2018-12-26T00:00:00+00:00",
            "employeeName": [
                "Ganesh Paul",
                "Jasmeet Singh Saran",
                "Palak Gupta",
                "Sanghamitra Roy"
            ]
        },
        {
            "day": "Thursday",
            "date": "2018-12-27T00:00:00+00:00",
            "employeeName": [
                "Ganesh Paul",
                "Isha Koul",
                "Jasmeet Singh Saran",
                "Palak Gupta"
            ]
        },
        {
            "day": "Friday",
            "date": "2018-12-28T00:00:00+00:00",
            "employeeName": [
                "Ganesh Paul",
                "Isha Koul",
                "Jasmeet Singh Saran",
                "Palak Gupta"
            ]
        },
        {
            "day": "Saturday",
            "date": "2018-12-29T00:00:00+00:00",
            "employeeName": [
                "Every Saturday"
            ]
        },
        {
            "day": "Sunday",
            "date": "2018-12-30T00:00:00+00:00",
            "employeeName": [
                "Sunday"
            ]
        },
        {
            "day": "Monday",
            "date": "2018-12-31T00:00:00+00:00",
            "employeeName": [
                "Biswajit Sur",
                "Chandan Singh",
                "Jasmeet Singh Saran",
                "Nitin Rawal",
                "Palak Gupta",
                "Shivam Pathak"
            ]
        },
        {
            "day": "Tuesday",
            "date": "2019-01-01T00:00:00+00:00",
            "employeeName": []
        },
        {
            "day": "Wednesday",
            "date": "2019-01-02T00:00:00+00:00",
            "employeeName": []
        },
        {
            "day": "Thursday",
            "date": "2019-01-03T00:00:00+00:00",
            "employeeName": []
        },
        {
            "day": "Friday",
            "date": "2019-01-04T00:00:00+00:00",
            "employeeName": []
        },
        {
            "day": "Saturday",
            "date": "2019-01-05T00:00:00+00:00",
            "employeeName": [
                "Every Saturday"
            ]
        },
        {
            "day": "Sunday",
            "date": "2019-01-06T00:00:00+00:00",
            "employeeName": [
                "Weekly Off"
            ]
        },
        {
            "day": "Monday",
            "date": "2019-01-07T00:00:00+00:00",
            "employeeName": []
        }
    ]
}

let blocks = allData.data.map((obj) => {
  if(obj.day !== 'Sunday'){
  return(
  <div className="col-6 col-sm-4 col-lg-2">
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className="text-right m-0">
          {obj.date.substring(0, 10)}
        </div>
        <div className="text-green">
          {obj.day}
        </div>
        <div className="text-muted mb-4">
          {obj.employeeName}
        </div>
      </div>
    </div>
  </div>
)}else{return null}});
    return (
        <Aux>
        {/*<div className="page-header">
                    <h1 className="page-title">
                        Dashboard
                    </h1>
        </div>*/}
                <div className="row row-cards">

                    {/*<div className="col-sm-6 col-lg-3">
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
                    </div>*/}

                    {/*<div className="col-sm-6 col-lg-3">
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
                    </div>*/}
                    {/*<div className="col-lg-12">
                        <div className="card">
                          <div className="card-body" style={{height: '492px'}}>
                          {/*<BigCalendar

                            events={events}
                            step={60}
                            showMultiDayTimes
                            views={allViews}
                            defaultDate={new Date()}
                            localizer={localizer}/>


                          </div>
                        </div>
                    </div>*/}
                    {blocks}
                </div>

            </Aux>
    );
}

export default home;
