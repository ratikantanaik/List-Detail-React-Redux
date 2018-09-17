import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ShowUSer extends React.Component{
    constructor(props){
        super(props);
        this.ele = document.createElement('div');
        document.body.appendChild(this.ele);
    }

    componentWillUnmount(){
        document.body.removeChild(this.ele);
    }

    render(){
        return ReactDOM.createPortal(
            <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Modal Header</h4>
                </div>
                <div className="modal-body">
                    <p>{
                        this.props.data?
                        this.props.data.title : 'No User Data..'}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

            </div>
            </div>,
            this.ele
        )
    }
}

const mapStateToProps = (state, props) => {
    user: state.user
}

connect(mapStateToProps)(ShowUSer);

export default ShowUSer;