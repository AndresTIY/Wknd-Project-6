import { createStore, applyMiddleware } from 'redux'
import initialView from './view/initial-view.js'
import signupView from './view/signup-view.js'
import feedView from './view/feed-view.js'
import loginView from './view/login-view.js'
import userFeedView from './view/user-feed-view.js'
import dataLoad from './data-load.js'
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
            store.dispatch({type:"LOGIN", data: data})
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
          type:"LOAD_USER",
          ownerId: data.ownerId,
          username: data.username,
          name: data.fullName,
          token: data["user-token"]
        })
      })
        return currentState

      case "LOAD_USER":
      $.ajax({
          url: (`${url}/data/users/${action.ownerId}`),
          method: 'GET',
          headers: {
            "application-id": appId,
            "secret-key": restKey
          },
        }).then(function(data,success,xhr){
        store.dispatch({
          type:"LOAD_DATA",
          ownerId: data.ownerId,
          username: data.username,
          name: data.fullName,
          token: action.token
        })
      })
        return currentState




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
          data: data,
          username: action.username,
          name: action.name,
          ownerId: action.ownerId,
          token: action.token
        })
      })
      return currentState;


      case "DATA_LOADED":
        var newState = {
          data: action.data,
          currentUser: {
            username: action.username,
            name: action.name,
            ownerId: action.ownerId,
            token: action.token
          },
          view: dataLoad
        }
      return Object.assign({}, currentState, newState)

      case "LOAD_PAGE":
        var newState = {
          view: feedView
        };
      return Object.assign({}, currentState, newState)



      case "CREATE_TWEET":
        $.ajax({
            url: 'https://api.backendless.com/v1/data/tw_clone',
            method: 'POST',
            headers: {
              "application-id": appId,
              "secret-key": restKey,
              "Content-Type": "application/json",
              "application-type": "REST"
            },
            data: JSON.stringify({
              message: action.tweet,
              username: action.username,
              fullName: action.fullName
            })
          }).then(function(data,success,xhr){
          store.dispatch({
            type:"LOAD_DATA"
            // user: data.email,
            // token: data["user-token"]
          })
        })
        return currentState;

        case "DEL_TWEET":
          var item = action.item;
          $.ajax({
            url: `${url}/data/tw_clone/${item.objectId}`,
            method: "DELETE",
            headers: {
              "application-id": appId,
              "secret-key": restKey
            }
          }).then(function(data){
            store.dispatch({type:"LOAD_DATA"})
          })

        case "USER_FEED":
          var newState = {
            view: userFeedView,
            userFeed: action.userClicked
          }
        return Object.assign({}, currentState, newState)



        case "LOGOUT":
        $.ajax({
          url: url + "/users/logout",
          type: "GET",
          dataType: 'JSON',
          headers: {
            "application-id": appId,
            "secret-key": restKey,
            "user-token": action.token,
            "application-type": "REST"
          }
        }).then((data)=>{
          store.dispatch({type:"LOGGED_OUT"})
        })
        return currentState;

        case "LOGGED_OUT":
          currentState = undefined;
        return currentState;




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
