import React,{useState} from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ submitSearch }) => {
 
 const [location, setLocation] = useState('');

 const onSubmitEvent = event => {
   event.preventDefault();
   if(!location || location==='') return;
   submitSearch(location);
 };


    return (
        <form onSubmit = {onSubmitEvent}> 
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={event => setLocation(event.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmitEvent}>
                SEARCH
            </button>
        </form>
    );
};

Form.prototype = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
