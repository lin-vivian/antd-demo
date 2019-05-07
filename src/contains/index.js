import React, { PureComponent } from "react";
import * as listActions from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";



class FetchData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    send = () => {
        this.props.actions.getFetchData();
    }
    render() {
        return (<div>
            <button onClick={this.send.bind(this)}>点击我吧</button>

        </div>)
    }
}

const mapStateToProps = (state) => ({
    list: state.listReducer
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...listActions
    }, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchData)