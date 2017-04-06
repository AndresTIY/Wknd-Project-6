import { createStore, applyMiddleware } from 'redux'
import initialView from './view/initial-view.js'
import signupView from './view/signup-view.js'

// import feedView from './view/feed-view.js'
// import loginView from './view/login-view.js'
import logger from './logger_middleware.js'
export default function app() {
  const url = 'https://api.backendless.com/v1/data/tw_clone;'

  const initialState = {
    user: null,
    data: null,
    // view: initialView
    view: signupView
  }

  const reducer = function(currentState, action){
    if (currentState === undefined){
      return initialState;
    }
    switch(action.type){
      case "SIGN_UP":
        var newState = {
          view: signupView
        }
        return Object.assign({}, currentState, newState)
      // case "LOG_IN":
      // case "LOG_OUT":
      // case "LOAD_DATA":
      // case "DATA_LOADED":
      // case "CREATE_TWEET":
      // case "DEL_TWEET":





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
