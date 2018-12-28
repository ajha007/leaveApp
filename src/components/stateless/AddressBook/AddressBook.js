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


class AddressBook extends React.Component {
  
    state = {
        employees :
        [
            {
                "id"   : "1",
                "name"  : "Abhijit Roy",
                "email" : "aroy@aapnainfotech.com",
                "contactno"   : "9899500454",
                "address"	: "57 Charak Sadan Vikaspuri New Delhi-110018",
                "dob"		: "24-May 1968",
                "doj"	: "1-Jan 1900",
                "pan"	: '',
                "reportingTo" : "Abhijit Roy"
                
            },
            {
                "id"   : "42",
                "name"  : "Sachin Tangoria",
                "email" : "stangoria@aapnainfotech.com",
                "contactno"   : "9650733653, 0120-2639674",
                "address"	: "A/9, T/6 Shalimar Garden Extn -II, Sahibabad. Pin - 210005",
                "dob"		: "6-Jun 1980",
                "doj"	: "19-Aug 2008",
                "pan"	: '',
                "reportingTo" : "Abhijit Roy"
                
            },
            {
                "id"   : "116",
                "name"  : "Amit Kumar Jha",
                "email" : "ajha@aapnainfotech.com",
                "contactno"   : "8130515765",
                "address"	: "30A, Samaspur, Pandav Nagar, delhi -110091",
                "dob"		: "14-Apr 1990",
                "doj"	: "1-Jun 2015",
                "pan"	: '',
                "reportingTo" : "Sachin Tangoria"
                
            },
            {
                "id"   : "169",
                "name"  : "	Niladri Mahato",
                "email" : "nmahato@aapnainfotech.in",
                "contactno"   : "7602366495",
                "address"	: "	Rly Qtr-T.K -6, Unit-2, RPF Colony,New Settlement, Kharagpur,W. Mednipur-721301",
                "dob"		: "18-Nov 1996",
                "doj"	: "1-Mar 2018",
                "pan"	: '',
                "reportingTo" : "Sachin Tangoria"
                
            },
            {
                "id"   : "94",
                "name"  : "Pankaj Kumar Mondal",
                "email" : "pkmondal@aapnainfotech.com",
                "contactno"   : "	9903770233, 8013180439",
                "address"	: "4/27 Ranapratap Road, Durgapur-713204",
                "dob"		: "16-Dec 1980",
                "doj"	: "16-Jan 2013",
                "pan"	: 'AZLPM2535L',
                "reportingTo" : "Sachin Tangoria"
                
            },
    
    ]
    }
    removeEmpHandler = (index) => {
       
        this.state.employees.splice(index, 1);
        this.setState(this.state.employees);
    }
	
   render(){
    return (
		<div className="col-12">
      
 <Table className="table"
    id="table"
    itemsPerPage={5}
    sortable={['Name', 'Emp ID']}
    filterable={['Name', 'Email ID', 'Contact No.', 'Reporting To', 'Address' ]} >

    {this.state.employees.map(
        (object, i) => <Tr key={i}>
        <Td column="Sr. No.">{i+1}</Td>
        <Td column="Emp ID">{object.id}</Td>
        <Td column="Name">{object.name}</Td>
        <Td column="Email">{object.email}</Td>
        <Td column="Contact No.">{object.contactno}</Td>
        <Td column="Address">{object.address}</Td>
        <Td column="DOB">{object.dob}</Td>
        <Td column="DOJ">{object.doj}</Td>
        <Td column="PAN">{object.pan}</Td>
        <Td column="Reporting To">{object.reportingTo}</Td>

        <Td column="Remove"><button type="button" className="btn btn-danger ml-auto" onClick={this.removeEmpHandler.bind(this, i)} >Remove</button></Td>
        </Tr>
        )}
    </Table>,
    </div>

       
);
    }
}

export default AddressBook;
