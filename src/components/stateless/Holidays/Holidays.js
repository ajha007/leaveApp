import React from 'react';
import SortableTbl from 'react-sort-search-table';

let MyData = 
[
    {
        "_id"   : "srno_1",
        "name"  : "New Year’s Day",
        "date"  : "01 Jan 2019",
        "day"   : "Tuesday",        
    },
    {
        "_id"   : "srno_2",
        "name"  : "Republic Day",
        "date"  : "26 Jan 2019",
        "day"   : "Saturday",
    },
    {
        "_id"   : "srno_3",
        "name"  : "Holi",
        "date"  : "21 Mar 2019",
        "day"   : "Thursday",
    },
    {
        "_id"   : "srno_4",
        "name"  : "Good Friday",
        "date"  : "19 April 2019",
        "day"   : "Friday",
    },
    {
        "_id"   : "srno_5",
        "name"  : "Floating holiday: Any one Id-Ul- Fitre/Maha Navami/Goverdhan Puja/Guruparv",
        "date"  : "5th June/7th Oct/28th Oct/12th Nov",
        "day"   : "Wednesday/Monday/Monday/Tuesday",
    },
];

const holidaysList = (props) =>{
	let col = [
        "name",
        "date",
        "day",
    ];
	let tHead = [
        "Holiday",
        "Date",
        "Day",
    ];

    return (
		<SortableTbl tblData={MyData}
			tHead={tHead}
			dKey={col}
			search={true}
			defaultCSS={true}			
		/>
);
}

export default holidaysList;