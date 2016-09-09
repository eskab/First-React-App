import React, { PropTypes } from 'react';

const Spinner = ({ pending }) => {
  if (pending) {
    return (
      <div className="spinner">
        <img src="http://www.lettersmarket.com/uploads/lettersmarket/blog/loaders/common_metal/ajax_loader_metal_512.gif" alt="Loading" />
      </div>  
    )  
  }

  return null
}

Spinner.propTypes = {
  pending: PropTypes.bool.isRequired
};

export default Spinner;