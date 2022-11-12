import React, { FC, Fragment } from 'react';
import styles from './index.module.less';

const TaskPage: FC = () => {
    return (
        <Fragment>
            <div className={styles.task_main}></div>
        </Fragment>
    );
};

export default TaskPage;