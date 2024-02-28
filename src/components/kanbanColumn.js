// import relevant hooks, components and css styles

import React from 'react';
import Task from './kanbanTask.js'
import PropTypes from 'prop-types';
import styles from 'src/styles/model.module.scss';
import {TaskContext} from './context'

export default class Column extends React.Component {
    
    render() {

        const {Consumer: TaskConsumer} = TaskContext;

        const {columnTitle, limit, className} = this.props
// Display Task list
        return (
            <div className={className}>
                <h2>{columnTitle}</h2>
                <TaskConsumer>
                    {(context) =>  this.generateTaskList(context)}
                </TaskConsumer>
            </div>
        )
    }
// Generate task list
    generateTaskList = (context)=>{
        const {id} = this.props 
        return context.tasks.filter(task =>  task.columnId == id).map(task =>
            // Call Task component 
            <Task key={task.id} item={task} moveTask={context.moveTask} moveBackTask={context.moveBackTask} removeTask={context.removeTask}></Task>)
    }
}
// Set Props for Column
Column.propTypes = {
    columnTitle: PropTypes.string,
    className: PropTypes.string,
    limit: PropTypes.number,
    id: PropTypes.number
}
