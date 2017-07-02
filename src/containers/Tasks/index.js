import React from 'react';
import { connect } from 'react-redux';

const Tasks = (props) => {
    return (
        <div>
            <h1>Tasks:</h1>
            {props.tasks.map(task => <p>{task.title}</p>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToState = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToState)(Tasks);