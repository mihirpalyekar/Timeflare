// import relevant hooks, components and css styles

import React from 'react';
import styles from 'src/styles/model.module.scss';
import ColumnContainer from './kanbanColumnContainer';

export default class Board extends React.Component {
// Render Kanban Column Container    
    render() {
        return (
            <section className={styles.kanban}>
                <ColumnContainer/>
            </section>
        )
    }
}
