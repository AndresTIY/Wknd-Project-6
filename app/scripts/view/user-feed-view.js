import feedItemView from './feed-item-view.js';

export default function userFeedView (store){
  let state = store.getState();
  let currentUser = state.currentUser;
  // console.log(currentUser);


  let $html = $(`
    <div>
      <div class="feed-header">
        <h4>Share Your Thoughts</h4>

        <textarea name="name" rows="4" cols="40"></textarea>
        <button class="create-btn" name="button">
          <i class="fa fa-comment-o" aria-hidden="true"></i>
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



  $html.find('.create-btn').on('click',(e)=>{
    //pop up create message form with a send msg button
    console.log('button still good');
    let newMsg = $($html).find('textarea').val();
    store.dispatch({
      type:"CREATE_TWEET",
      tweet: newMsg,
      username: currentUser.username,
      fullName: currentUser.name
    })

  })





$html.find('.logout').on('click', (e)=>{
  console.log('yay');
  store.dispatch({type:"LOGOUT", token: currentUser.token})
})









  $($html).find('.feed-card').append(userTweets)

  return $html;
}//end of export
