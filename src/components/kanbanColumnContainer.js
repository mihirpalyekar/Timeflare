// import relevant hooks, components and css styles

import React from 'react';
import Column from './kanbanColumn.js'
import {ColumnContext} from './context'
import styles from 'src/styles/model.module.scss';

// Create Column container
function ColumnContainer() {

    const {Consumer: ColumnConsumer} = ColumnContext;
    
    const generateColumns = (context) => {
 // show ToDo, In Progress, Review and Done columns   
        return context.columns.map(column =>
            <Column className={column.className} key={column.id} id={column.id} item={column} columnTitle={column.title} limit={column.limit}/>)
    }
    
    return (
        <div className={styles.column__container}> 
            <ColumnConsumer>
                {(context) =>  generateColumns(context)}
            </ColumnConsumer>
        </div>
    )
}

export default ColumnContainer
