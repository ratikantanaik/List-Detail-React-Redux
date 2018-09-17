import Constants from '../constant';

const userReducer = (state = {}, {type, payload}) => {
    console.log(type);
    switch(type){
        case Constants.UPDATE_USER:
                return {...state, user: payload};
        default:
            return state;
    }
}

export default userReducer;