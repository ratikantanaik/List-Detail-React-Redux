const companyReducer = (state={companyName: 'Google', location: 'Carlifornia'}, {type, payload}) => {
    switch(type){
        case 'get':
            return state;
            break;
        default:
            return state;
    }
}

export default companyReducer;

