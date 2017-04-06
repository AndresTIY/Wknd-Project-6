import { createStore, applyMiddleware } from 'redux'
import initialView from './view/initial-view.js'
// import feedView from './view/feed-view.js'
// import loginView from './view/login-view.js'
// import signupView from './view/signup-view.js'
import logger from './logger_middleware.js'
export default function app() {
  const url = 'https://api.backendless.com/v1/data/tw_clone;'

  const initialState = {
    user: null,
    data: null,
    view: initialView
  }

  const reducer = function(currentState, action){
    if (currentState === undefined){
      return initialState;
    }
    switch(action.type){
      default:
        return currentState;
    }//end of switch
  }//end of reducer

  const store = createStore(reducer, applyMiddleware(logger));

  const render = function(){
    let state = store.getState();
    $('#app').html(state.view(store));
  }//end of render

  store.subscribe(render);
  store.dispatch({type: "NOOP"});








}
