import Constants from '../constant';
import axios from 'axios';

const employeeActions = {
    add : (payload) => {
        return {
            type: Constants.EMPLOYEE_ADD,
            payload
        }
    },

    updateUser: (payload) => {
        return {
            type: Constants.UPDATE_USER,
            payload
        }
    },

    getUser: () => {
        return dispatch => {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((data) => {
                dispatch({
                    type: 'UPDATE_USER',
                    payload: data
                });
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },

    delete : (payload) => {

    }
}

export default employeeActions;