import feedItemView from './feed-item-view.js';

export default function userFeedView (store){
  let state = store.getState();
  let currentUser = state.currentUser;
  // console.log(currentUser);


  let $html = $(`
    <div>
      <div class="feed-header">
        <h4>You're Looking At ${state.userFeed}'s page </h4>


        <button class="back-btn" name="button">
        Go Back
        </button>

        <div class="feed-card"></div>
        <button class="logout">log out</button>
      </div>
    </div>
    `)

  var userTweets = state.data.data.map((item)=>{
    if(item.username === state.userFeed){
      return feedItemView(store, item)
    }
  })



  $html.find('.back-btn').on('click',(e)=>{
    store.dispatch({type:"LOAD_PAGE"})
  })





$html.find('.logout').on('click', (e)=>{
  console.log('yay');
  store.dispatch({type:"LOGOUT", token: currentUser.token})
})









  $($html).find('.feed-card').append(userTweets)

  return $html;
}//end of export
