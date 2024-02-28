
// import relevant hooks, components and css styles
import React,{useState} from 'react';
import Board from './kanbanBoard.js'
import Form from './kanbanForm';
import {TaskContext, ColumnContext} from './context'
import styles from 'src/styles/model.module.scss';

export function Kanban() {
// Add Kanban board columns to pass in KanbanColumn.js
    const columns = ([
        { id: 1, title: 'To do', limit: 4, className: [styles.col_first]},
        { id: 2, title: 'In progress', limit: 2, className: [styles.col_second]},
        { id: 3, title: 'Review', limit: 3, className: [styles.col_third]},
        { id: 4, title: 'Done', limit: 4, className: [styles.col_fourth]}
    ])

    const tasksInMemory = JSON.parse(localStorage.getItem('task')) || [];
    const [tasks, setTasks] = useState(tasksInMemory)

    const setItem = (tasks) => {
        localStorage.setItem('task', JSON.stringify([...tasks]))
        setTasks(JSON.parse(localStorage.getItem('task')) || [])
    }
// Move tasks amongst ToDo, In Progress, Review and Done columns in forward direction
    const moveTask = task => {
        //SEt task limit in each column
        if(task.columnId === 4) {return}
        let taskList = [...tasks]; 
        const nextCol = task.columnId+1
        const taskQty = taskList.filter((task) => task.columnId === nextCol).length

        if(taskQty <  columns[nextCol-1].limit) {
            taskList.forEach((oldElement) => {
                if(oldElement.id === task.id) {
                    oldElement.columnId++
                }    
            })
            setItem(taskList)
        } else {
            alert('The task limit in the column cannot be exceeded')
        }
    }
// Move tasks amongst ToDo, In Progress, Review and Done columns in backward direction
    const moveBackTask = task => {
        if(task.columnId === 1) {return}
        let taskList = [...tasks]; 
        const prevCol = task.columnId-1
        const taskQty = taskList.filter((task) => task.columnId === prevCol).length

        if(taskQty <  columns[prevCol-1].limit) {
            taskList.forEach((oldElement) => {
                if(oldElement.id === task.id) {
                    oldElement.columnId--
                }    
            })
            setItem(taskList)
        } else {
            alert('The task limit in the column cannot be exceeded')
        }
    }
// Get new task from Form field
    const getNewTask = (newTask) => { 
        const toDoTasks = [...tasks].filter((task) => task.columnId === 1).length

        if(toDoTasks < columns[0].limit) {
            localStorage.setItem('task', JSON.stringify([...tasks, newTask]))
            setTasks(JSON.parse(localStorage.getItem('task')) || [])
        } else {
            alert('Task limit (4) cannot be exceeded')
        }
    }
// create confirmation prompt for user before deleting a task
    const removeTask = (task) => {
        if (window.confirm("Are you sure you want to delete the task?") == true) {
            const tasksList =  JSON.parse(localStorage.getItem('task'))
            const updateTasks = tasksList.filter(item => item.id !== task.id)
            
            setItem(updateTasks)
        } else {
            window.alert("Deletion has been cancelled")
        }
    }
// Provider component for task and column context objects
    const {Provider: TaskProvider} = TaskContext;
    const {Provider: ColumnProvider} = ColumnContext;

    return (
        <>
        <h3>Manage your Tasks</h3>
            <Form getNewTask={getNewTask}/>
            <ColumnProvider value={{columns}}>
                <TaskProvider value={{tasks,moveTask, moveBackTask, removeTask}}> 
                    <Board/>
                </TaskProvider> 
            </ColumnProvider>
        </>
    );
}

