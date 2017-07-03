import React from 'react';
import { connect } from 'react-redux';

import { BACKLOG } from '../../constants/taskStatuses';
import Task from '../../components/Task';

const Tasks = (props) => {
    return (
        <section>
            <h2>Backlog</h2>
            <ul>
                {props.tasks
                    .filter(task => task.status === BACKLOG)
                    .map(task => <Task task={task} />)}
            </ul>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasks);