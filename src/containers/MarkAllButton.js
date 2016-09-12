import { connect } from 'react-redux';

import { markAll } from '../actions/todos';
import ActionButton from '../components/ActionButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(markAll(ownProps.todos))
  }
};

const MarkAllButton = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default MarkAllButton;