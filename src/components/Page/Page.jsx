import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css'
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import useForecast from '../../hooks/useForecast';

const Page = () => {
    const {isError, isLoading, forecast,submitRequest} = useForecast();

    const onSubmit = (value) => {

        submitRequest(value);
    }

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
            {/* Form */}
             {!isLoading &&< Form submitSearch={onSubmit} />}
              {/* Error */}
              {isError && <Error message={isError}/> }
              {/* Loader */}
              {isLoading && <Loader /> }
              </div>
              {/* Forecast */}
              {forecast && <Forecast /> }
            
        </Fragment>
    );
};

export default Page;
