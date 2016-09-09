import { connect } from 'react-redux';

import { setFilter } from '../actions/todos';
import TodoFilterButton from '../components/TodoFilterButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))    
  }
};

const TodoFilterButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFilterButton)

export default TodoFilterButtonContainer;