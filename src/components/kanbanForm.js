// import relevant hooks, components and css styles

import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from 'src/styles/model.module.scss';

function Form (props) {
 // Set the default values of Form component   
    const init = {taskTitle:'', user:''}
// handle reset and change actions for reducer
    const reducer = (state, action) => {
        switch(action.type) {
        case 'reset':
            return init;
        case 'change':
            const {name, value} = action.element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init)
    const {taskTitle, user} = state
   
    const {getNewTask} = props

// Add Form validation conditions
    const formValidation = errors => {

        if(taskTitle.length < 2) errors.push('Task name is required')
        if(user.length < 2) errors.push('User name is required')
    }
// Function to add new task
    const addTask = e => {
        e.preventDefault()
//  attributes for new task
        const newTask = {
            id: uuid(),
            title: taskTitle,
            user: user,
            columnId: 1,
        }
        const errors=[]
        formValidation(errors)
// Call getNewTask if there are no errors on the Form
        if(errors.length === 0) {
            getNewTask(newTask)
            dispatch({type:'reset'})
        } else {
            alert(errors.join(",\n "))
        }
    }
// Show Form for accepting task details
    return (
        <form className={styles.form} onSubmit={addTask}
        autoComplete="off">
            <div className={styles.form__container}>
                <label> Task Title <input name='taskTitle' value={taskTitle} type='text' onChange={e => dispatch({type: 'change', element: e.target})} placeholder='task title' required/></label>
                <label> Assigned to <input name='user'  value={user} type='text' onChange={e => dispatch({type: 'change', element: e.target})}  placeholder='user name' required pattern= '^[a-zA-Z –-]+$'/></label>
                <input type="submit" value="Add" className={styles.form__submit} />
            </div>
        </form>
    )
}

// Set Prop types for Form
Form.propTypes = {
    getNewTask: PropTypes.func
}

export default Form
