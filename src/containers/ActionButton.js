import { connect } from 'react-redux';

import ActionButton from '../components/ActionButton';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(ownProps.onClick(ownProps.filter))
  }
};

const ActionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ActionButton)

export default ActionButtonContainer;