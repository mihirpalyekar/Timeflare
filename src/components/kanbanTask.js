// import relevant hooks, components and css styles

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import styles from 'src/styles/model.module.scss';


function Task(props) {
// Set Props like task title, user 
    const task = props.item
    const {title, user} = task
    const {moveTask, moveBackTask, removeTask} = props

    // show task, delete task button and task movement arrows
    return (
        <div className={styles.task}>
            <button onClick={() =>  removeTask(task)} className={styles.task__delete}>X</button>
            <h3>{title}</h3>
            <p>User: {user}</p>
            {task.columnId!==1 && <button onClick={() => moveBackTask(task)} className={[styles.button__left, styles.btn_desktop, styles.button]} > {<FontAwesomeIcon icon={faArrowLeftLong}/>} </button> }
            {task.columnId!==4 && <button onClick={() => moveTask(task)} className={[styles.button__right, styles.btn_desktop, styles.button]} > {<FontAwesomeIcon icon={faArrowRightLong}/>} </button>  }
        </div>
    )
}

export default Task

// Set type check for task

Task.propTypes = {
    item: PropTypes.object,
    moveTask: PropTypes.func,
    moveBackTask: PropTypes.func,
    removeTask: PropTypes.func
}
