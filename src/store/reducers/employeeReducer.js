import Constants from '../constant'; 

const employeeList = [{
    empName : 'Ratikanta Naik',
    age: 34,
    companyName: 'OSP Grp.'
}]

const employeeReducer = (state=[...employeeList], {type, payload}) => {
    switch(type){
        case Constants.EMPLOYEE_ADD:
                let oldEmpList = [...state];
                oldEmpList.push(payload);
            return oldEmpList;
        break;
        default:
            return state;
    }
}

export default employeeReducer;