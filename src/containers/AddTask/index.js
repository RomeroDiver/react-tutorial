import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BACKLOG } from '../../constants/taskStatuses';


class AddTask extends Component {
    state = {
        taskTitle: ''
    }

    onTaskTitleChange = (event) => {
        this.setState({ taskTitle: event.target.value });
    }

    addTask = () => {
        this.props.addTask({
            title: this.state.taskTitle,
            status: BACKLOG
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.taskTitle} onChange={this.onTaskTitleChange} />
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    };
}

export default connect(null, mapDispatchToProps)(AddTask);