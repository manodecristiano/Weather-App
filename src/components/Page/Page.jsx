import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css'
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

const Page = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
            {/* Form */}
             <Form />
              {/* Error */}
              {/* <Error /> */}
              {/* Loader */}
              {/* <Loader /> */}
              {/* Forecast */}
              {/* <Forecast /> */}
              </div>
        </Fragment>
    );
};

export default Page;
