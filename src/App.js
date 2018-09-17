import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import employeeActions from './store/actions/employeeActions';
import ShowUser from './components/showUser';

class App extends Component {
  constructor(props){
    super(props);
    this.onAddEmployee = this.onAddEmployee.bind(this);
    this.onGetUser = this.onGetUser.bind(this);
    this.nameRef = React.createRef();
    this.comRef = React.createRef();
    this.ageRef = React.createRef();
  }

  onAddEmployee(){
    let emp = {
      empName: this.nameRef.current.value,
      age:this.ageRef.current.value,
      companyName: this.comRef.current.value
    }
    this.props.onAddEmployee(emp);
  }  

  onGetUser(e){
    e.preventDefault();
    this.props.onGetUser();
  }

  render() {

      const empList = this.props.employeeList.map((emp) => {
        return <div key={emp.empName} className='row' style={{border: 'solid', borderColor: 'grey' }}>
                <div className='col-sm-12'>{`I am ${emp.empName} ${emp.age} years old works with ${emp.companyName}.`}</div>
              </div>
      }); 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button type="button" onClick={this.onGetUser} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Show User</button>
        <ShowUser />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              {
                this.props.addEmployee &&
                <div>
                  Emp Name: <input ref={this.nameRef} className="form-control"  type="text" />
                  Age: <input ref={this.ageRef} className="form-control"  type="text" />
                  Company: <input ref={this.comRef} className="form-control"  type="text" />
                  <input onClick={this.onAddEmployee} className='btn btn.primary' type='button' value='Add Employee' />
                </div>
              }
            </div>
            <div className='col-sm-6'>
              <div className='row'>
                {empList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    employeeList: state.employeeList,
    addEmployee: props.addEmployee
  }
}

const mapDispatchToProps = {
    onAddEmployee: employeeActions.add,
    onGetUser: employeeActions.getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
