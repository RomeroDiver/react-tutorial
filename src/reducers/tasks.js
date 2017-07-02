export const ADD_TASK = 'tasks/ADD_TASK';
export const REMOVE_TASK = 'tasks/REMOVE_TASK';

export const addTask = (task) =>({
    type: ADD_TASK,
    payload: task
});

export const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    payload: taskId
});

export default function counter(state = [], action) {
  switch (action.type) {
  case ADD_TASK:
    return [
        ...state,
        action.payload
    ];
  case REMOVE_TASK:
    return state.filter(task => task.id !== action.payload);
  default:
    return state;
  }
}