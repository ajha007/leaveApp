import React from 'react';
import SortableTbl from 'react-sort-search-table';
/*import Table from 'react-responsive-data-table';*/


let MyData =
[
    {
        "id"   : "srno_1",
        "name"  : "New Year’s Day",
        "date"  : "01 Jan 2019",
        "day"   : "Tuesday",
    },
    {
        "id"   : "srno_2",
        "name"  : "Republic Day",
        "date"  : "26 Jan 2019",
        "day"   : "Saturday",
    },
    {
        "id"   : "srno_3",
        "name"  : "Holi",
        "date"  : "21 Mar 2019",
        "day"   : "Thursday",
    },
    {
        "id"   : "srno_4",
        "name"  : "Good Friday",
        "date"  : "19 April 2019",
        "day"   : "Friday",
    },
    {
        "id"   : "srno_5",
        "name"  : "Floating holiday: Any one Id-Ul- Fitre/Maha Navami/Goverdhan Puja/Guruparv",
        "date"  : "5th June/7th Oct/28th Oct/12th Nov",
        "day"   : "Wednesday/Monday/Monday/Tuesday",
    },
    {
        "id"   : "srno_1",
        "name"  : "New Year’s Day",
        "date"  : "01 Jan 2019",
        "day"   : "Tuesday",
    },
    {
        "id"   : "srno_2",
        "name"  : "Republic Day",
        "date"  : "26 Jan 2019",
        "day"   : "Saturday",
    },
    {
        "id"   : "srno_3",
        "name"  : "Holi",
        "date"  : "21 Mar 2019",
        "day"   : "Thursday",
    },
    {
        "id"   : "srno_4",
        "name"  : "Good Friday",
        "date"  : "19 April 2019",
        "day"   : "Friday",
    },
    {
        "id"   : "srno_5",
        "name"  : "Floating holiday: Any one Id-Ul- Fitre/Maha Navami/Goverdhan Puja/Guruparv",
        "date"  : "5th June/7th Oct/28th Oct/12th Nov",
        "day"   : "Wednesday/Monday/Monday/Tuesday",
    },
    {
        "id"   : "srno_1",
        "name"  : "New Year’s Day",
        "date"  : "01 Jan 2019",
        "day"   : "Tuesday",
    },
    {
        "id"   : "srno_2",
        "name"  : "Republic Day",
        "date"  : "26 Jan 2019",
        "day"   : "Saturday",
    },
    {
        "id"   : "srno_3",
        "name"  : "Holi",
        "date"  : "21 Mar 2019",
        "day"   : "Thursday",
    },
    {
        "id"   : "srno_4",
        "name"  : "Good Friday",
        "date"  : "19 April 2019",
        "day"   : "Friday",
    },
    {
        "id"   : "srno_5",
        "name"  : "Floating holiday: Any one Id-Ul- Fitre/Maha Navami/Goverdhan Puja/Guruparv",
        "date"  : "5th June/7th Oct/28th Oct/12th Nov",
        "day"   : "Wednesday",
    }
];

const header = [
    {
        id:"ID",
        name: "Holiday",
        date: "Date",
        day: "Day"
    }
];

const holidaysList = (props) =>{
	let col = [
        "id",
        "name",
        "date",
        "day",
    ];
	let tHead = [
        "ID",
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

        // <Table style={{
        //     opacity: 0.8,
        //     backgroundColor: "blue",
        //     color: "#ffffff",
        //     textAlign: "center"
        //   }}
        //   tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
        //   pages={true}
        //   pagination={true}
        //   onRowClick={() => {}} // if You Want Table Row Data OnClick then assign this {row => console.log(row)}
        //   page={true}
        //   errormsg="Error. . ."
        //   loadingmsg="Loading. . ."
        //   isLoading={false}
        //   sort={true}
        //   title="Customers"
        //   search={true}
        //   size={10}
        //   data={{
        //     head: {
        //         id: "ID",
        //         name: "Name",
        //         date: "Date",
        //         day: "Day At",
        //     },
        //     data:MyData
        //   }} />
);
}

export default holidaysList;
