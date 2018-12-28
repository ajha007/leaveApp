import React from 'react';
//import SortableTbl from 'react-sort-search-table';
import { Table, Tr, Td } from "reactable";
import Button from '../UI/Form/Button';
// import Table from 'react-responsive-data-table';




//const dataLength = MyData.length;


const tableColumns = [
    { title: 'ID', prop: 'id' },
    { title: 'Holiday', prop: 'name' },
    { title: 'Date', prop: 'date' },
    { title: 'Day', prop: 'day' },
  
];


class Holidays extends React.Component {
  
    state = {
        holidays :
        [
            {
                "id"   : "1",
                "name"  : "New Year’s Day",
                "date"  : "01 Jan 2019",
                "day"   : "Tuesday",
                
            },
            {
                "id"   : "2",
                "name"  : "Republic Day",
                "date"  : "26 Jan 2019",
                "day"   : "Saturday",
            },
            {
                "id"   : "3",
                "name"  : "Holi",
                "date"  : "21 Mar 2019",
                "day"   : "Thursday",
            },
            {
                "id"   : "4",
                "name"  : "Good Friday",
                "date"  : "19 April 2019",
                "day"   : "Friday",
            },
            {
                "id"   : "5",
                "name"  : "Floating holiday: Any one Id-Ul- Fitre/Maha Navami/Goverdhan Puja/Guruparv",
                "date"  : "5th June/7th Oct/28th Oct/12th Nov",
                "day"   : "Wednesday/Monday/Monday/Tuesday",
            },
            {
                "id"   : "6",
                "name"  : "Independence Day",
                "date"  : "15 Aug 2019",
                "day"   : "Thursday",
                "button": <Button />
            },
            {
                "id"   : "7",
                "name"  : "Mahatma Gandhi Birthday",
                "date"  : "02 Oct 2019",
                "day"   : "Wednesday",
            },
            {
                "id"   : "8",
                "name"  : "Dussehra",
                "date"  : "08 Oct 2019",
                "day"   : "Tuesday",
            },
            {
                "id"   : "9",
                "name"  : "Diwali",
                "date"  : "27 Oct 2019",
                "day"   : "Sunday",
            },
            {
                "id"   : "10",
                "name"  : "Christmas Day",
                "date"  : "25 Dec 2019",
                "day"   : "Wednesday",
            },
            {
                "id"   : "11",
                "name"  : "Respective B’ Day",
                "date"  : "",
                "day"   : "",
            },
            {
                "id"   : "12",
                "name"  : "Respective Anniversary Day",
                "date"  : "",
                "day"   : "",
            },
    
    ]
    }
    removeHandler = (index) => {
        console.log(this.state.holidays);
        this.state.holidays.splice(index, 1);
    this.setState(this.state.holidays);
    }
	
   render(){
    return (
		<div className="col-12">
      {/* <SortableTbl tblData={MyData}
        tHead={tHead}
        dKey={col}
        search={true}
        defaultCSS={true}
          /> */}


{/* <Table className="table" id="table" data={MyData}
 itemsPerPage={15} 
 pageButtonLimit={5}
 filterable={['name', 'day', 'date']}
 sortable={['name', 'date', 'day']} >
    
 </Table> */}
 <Table className="table" id="table" itemsPerPage={5} sortable={['Name', 'Date', 'Day', 'Sr. No.']} filterable={['Name', 'Date', 'Day']} >
    {this.state.holidays.map(
        (object, i) => <Tr key={i}>
        <Td column="Sr. No.">{i+1}</Td>
        <Td column="Name">{object.name}</Td>
        <Td column="Date">{object.date}</Td>
        <Td column="Day">{object.day}</Td>
        <Td column="Remove"><button type="button" className="btn btn-danger ml-auto" onClick={this.removeHandler.bind(this, i)} >Remove</button></Td>
        </Tr>
        )}
    </Table>,
    </div>

       
);
    }
}

export default Holidays;
