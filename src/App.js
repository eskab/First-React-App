import React from 'react';

import NewTodoList from './containers/TodoList';

const App = () => (
  <div>
    <h1>Todo App</h1>
    <NewTodoList />
  </div>
);

export default App;

// const store = createStore(todoReducer, {
//   todos: [...DATA],
//   filter: 'ALL'
// });
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')));

// export default class App extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div className="my-first-react-app">
//         <h1>Todo App</h1>
//         <TodoAddForm
//           store={store}
//         />
//         <TodoList
//           store={store}
//         />
//       </div>
//     );
//   }
// }
