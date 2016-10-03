import { connect } from 'react-redux';

import { deleteMarked } from '../actions/todos';
import ActionButton from '../components/ActionButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(deleteMarked())
  }
};

const DeleteMarkedButton = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default DeleteMarkedButton;