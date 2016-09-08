import { connect } from 'react-redux';

import TodoFilterButton from '../components/TodoFilterButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER', 
        filter: ownProps.filter
      })
    }     
  }
};

const TodoFilterButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFilterButton)

export default TodoFilterButtonContainer;