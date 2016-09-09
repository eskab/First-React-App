import { connect } from 'react-redux';

import Spinner from '../components/Spinner';

const mapStateToProps = (state) => {
  return {
    pending: state.todos.pending
  }
}

const SpinnerContainer = connect(mapStateToProps)(Spinner)

export default SpinnerContainer;