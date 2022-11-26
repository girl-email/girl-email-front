import React, {Fragment} from 'react';
import styles from './index.module.less';

const Home = () => {

    const renderTaskCard = () => {
        return (
            <Fragment>
                <div className={styles.home_task_card}>
                    <ul>
                        <li>
                            <span>标题：</span>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className={styles.home_main}>
                {renderTaskCard()}
            </div>
        </Fragment>
    );
};

export default Home;