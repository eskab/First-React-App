import { connect } from 'react-redux';

import Spinner from '../components/Spinner';

const mapStateToProps = (state) => {
  console.log('state in spinner');
  console.log(state);
  return {
    pending: state.todos.pending
  }
}

const SpinnerContainer = connect(mapStateToProps)(Spinner)

export default SpinnerContainer;