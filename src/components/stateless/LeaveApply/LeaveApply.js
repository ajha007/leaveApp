import React from 'react';

class LeavyApply extends React.Component{
  state = {
    type_of_leave : 'earned',
    start_date : null,
    number_of_days : null,
    reason_for_leave : null,
    balance_leaves : 10,

      error_start_date : false,
      error_number_of_days : false,
      error_reason_for_leave : false

  }
  setFormValuesToStateHandler = (e) => {
    switch(e.target.name){
      case 'tol':
        this.setState({
          type_of_leave : e.target.value
        },() => {
          switch (this.state.type_of_leave) {
            case 'earned':
              this.setState((prevState, props) => {
                return{
                  balance_leaves : 10
                }
              });
              break;
            case 'anniversary':
              this.setState((prevState, props) => {
                return{
                  balance_leaves : 2
                }
              });
              break;
            case 'withoutPay':
              this.setState((prevState, props) => {
                return{
                  balance_leaves : 200
                }
              });
              break;
            case 'compensatory':
              this.setState((prevState, props) => {
                return{
                  balance_leaves : 5.2
                }
              });
              break;
            case 'sickLeave':
              this.setState((prevState, props) => {
                return{
                  balance_leaves : 15
                }
              });
              break;
            default:
              break;
          }
        });

        break;
      case 'st_date':
        this.setState({
          start_date : e.target.value
        });
        break;
      case 'no_of_days':
        this.setState({
          number_of_days : e.target.value
        });
        break;
      case 'reason':
        this.setState({
          reason_for_leave : e.target.value
        });
        break;
      default :
        break;
    }
  }

  submitLeaveHandler = () => {
    console.log(this.state.error);
    if(this.state.reason_for_leave == null){
      this.setState({
        error_reason_for_leave : true
      });
    }
    if (this.state.start_date == null) {
      this.setState({
        error_start_date : true
      });
    }
    if(this.state.number_of_days === null){
      this.setState({
        error_number_of_days : true
      });
    }
console.log( this.state.error);
    //}

  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">

              <div className="card-header">
                <h4>Apply Leave</h4>
              </div>


              <div className="card-body">
                <div className="row">

                  {/*EMPLOYEE ID*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Employee Id
                      </label>
                      <div className="form-control-plaintext">
                        169
                      </div>
                    </div>
                  </div>

                  {/*APPLICATION DATE*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Application Date
                      </label>
                      <div className="form-control-plaintext">
                        26-12-2018
                      </div>
                    </div>
                  </div>

                  {/*TYPE OF LEAVE*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Type of Leave
                      </label>
                      <select className="form-control custom-select" name="tol" onChange={this.setFormValuesToStateHandler}>
                        <option value="earned">Earned</option>
                        <option value="anniversary">Anniversary/Birthday</option>
                        <option value="withoutPay">Without Pay</option>
                        <option value="compensatory">Compensatory</option>
                        <option value="sickLeave">Sick Leave</option>
                      </select>
                    </div>
                  </div>

                  {/*BALANCE LEAVES*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Balance Leaves
                      </label>
                      <div className="form-control-plaintext">
                        {this.state.balance_leaves}
                      </div>
                    </div>
                  </div>

                  {/*START DATE*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Start Date
                      </label>
                      <input type="date" className={`form-control ${this.state.error_start_date ? 'is-invalid' : ''}`} name="st_date" onChange={this.setFormValuesToStateHandler}/>
                    </div>
                  </div>

                  {/*NUMBER OF DAYS*/}
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label className="form-label">
                        Number of days
                      </label>
                      <input type="number" className={`form-control ${this.state.error_number_of_days ? 'is-invalid' : ''}`} name="no_of_days" min="1" onChange={this.setFormValuesToStateHandler}/>
                    </div>
                  </div>

                  {/*REASON FOR LEAVE*/}
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">
                        Reason for Leave
                      </label>
                      <textarea className={`form-control ${this.state.error_reason_for_leave ? 'is-invalid' : ''}`} name="reason" onChange={this.setFormValuesToStateHandler}>

                      </textarea>
                    </div>
                  </div>

                </div>
              </div>


              <div className="card-footer text-right">
                <div className="d-flex">
                  <a href="javascript:void(0)" className="btn btn-link">Cancel</a>
                  <input type="button" className="btn btn-primary ml-auto" onClick={this.submitLeaveHandler} value="Submit"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeavyApply;
