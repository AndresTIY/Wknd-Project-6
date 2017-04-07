import { createStore, applyMiddleware } from 'redux'
import initialView from './view/initial-view.js'
import signupView from './view/signup-view.js'
import feedView from './view/feed-view.js'
import loginView from './view/login-view.js'
import logger from './logger_middleware.js'
export default function app() {
  const url = 'https://api.backendless.com/v1'
  const appId = "892747C4-CCC9-E96F-FF91-006B50E61400";
  const restKey = "30D82F23-700A-52A1-FF7B-1BC275C5F700";

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
      case "SIGN_UP":
        var newState = {
          view: signupView
        }
        return Object.assign({}, currentState, newState)

      case "CREATE_USER":
          $.ajax({
              url: url + "/data/Users",
              method: 'POST',
              headers: {
                "application-id": appId,
                "secret-key": restKey,
                "Content-Type": "application/json",
                "application-type": "REST"
              },
              data: JSON.stringify({
                fullName: action.name ,
                username: "@" + action.username,
                email: action.email,
                password: action.password
              })
            }).then(function(data,success,xhr){
            store.dispatch({stype:"LOAD_DATA"})
          })
      return currentState;

      case "LOGIN":
        var newState = {
          view: loginView
        };
      return Object.assign({}, currentState, newState)


      case "VALIDATE_USER":
      $.ajax({
          url: url + "/users/login",
          method: 'POST',
          headers: {
            "application-id": appId,
            "secret-key": restKey,
            "Content-Type": "application/json",
            "application-type": "REST"
          },
          data: JSON.stringify({
            login: action.email,
            password: action.password
          })
        }).then(function(data,success,xhr){
        store.dispatch({
          type:"LOAD_DATA",
          user: data.email,
          token: data["user-token"]
        })
      })
        return currentState



      // case "LOG_OUT":
      case "LOAD_DATA":
      $.ajax({
        url: url + "/data/tw_clone",
        type: "GET",
        dataType: 'JSON',
        headers: {
          "application-id": appId,
          "secret-key": restKey
        }
      }).then((data)=>{
        console.log(data);
        store.dispatch({
          type: "DATA_LOADED",
          data: data
        })
      })
      return currentState;


      case "DATA_LOADED":
        var newState = {
          data: action.data,
          currentUser: action.user,
          view: feedView
        }
      return Object.assign({}, currentState, newState)




      case "TEST_VIEW":
        var newState = {
          view: feedView,
          data: action.data
        }
      return Object.assign({}, currentState, newState)



      // case "DATA_LOADED":
        // var newState = {
        //   view: feedView
        // }
      // case "DATA_LOADED":
      // case "CREATE_TWEET":
      // case "DEL_TWEET":
      case "NOOP":
        return currentState;





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
