import React, { PropTypes } from 'react';

const Spinner = ({ pending }) => {
  if (pending) {
    return (
      <div className="spinner">
        <img src="http://www.escalatemedia.com/wp-content/themes/builder/assets/img/spinner.gif" alt="Loading" />
      </div>  
    )  
  }

  return null
}

Spinner.propTypes = {

};

export default Spinner;