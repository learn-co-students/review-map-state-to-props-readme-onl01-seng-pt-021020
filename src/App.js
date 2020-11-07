import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { orangePeel: ['a', 'b', 'c'] }
  //state is the state of the store
  //return value is the value of the props that are added to the app component.
}

//mapStateToProps() receives state as its first argument.

export default connect(mapStateToProps)(App);

//the mapStateToProps() method is executed with each change to the store's state.

// const vanille = (milkshake) => {
//   debugger;
//   return { items: milkshake.items }
// }
//
// export default connect(vanilla)(App);

// So in other words, whatever function we pass to the connect()
// function will be called each time the state changes, and the
// first argument to that function, whatever its name, will be the
// state of the store.
