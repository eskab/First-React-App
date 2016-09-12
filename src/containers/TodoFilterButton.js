import { connect } from 'react-redux';

import { setFilter } from '../actions/todos';
import ActionButton from '../components/ActionButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  }
}

const TodoFilterButton = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default TodoFilterButton;