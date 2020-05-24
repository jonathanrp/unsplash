import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SearchImageContainer from '../SearchImage/SearchImageContainer';
import userReducer from '../SearchImage/reducer';

//Thunk middleware
//composeWithDevTools sends data to Chrome Dev Tools
const enhancer = composeWithDevTools(applyMiddleware(thunk, promise));

// Creates store, sends the reducer and applies the enhancer middleware
const store = createStore(userReducer, {}, enhancer);

class App extends Component  {

  render() {
    return (
      <Provider store={store}>
        <SearchImageContainer />
      </Provider>
    )
  }
}

export default App;