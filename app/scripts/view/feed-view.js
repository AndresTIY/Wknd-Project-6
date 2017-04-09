import feedItemView from './feed-item-view.js';

export default function feedView (store){
  let state = store.getState();
  let currentUser = state.currentUser;
  console.log(state.currentUser);






  let $html = $(`
    <div>
      <div class="feed-header">
        <h4>Share Your Thoughts</h4>
        <textarea name="name" rows="4" cols="40"></textarea>
        <button type="button" name="button">
          <i class="fa fa-comment-o" aria-hidden="true"></i>
        </button>
        <div class="feed-card"></div>
      </div>
    </div>
    `)

  var tweets = state.data.data.map((item)=>{
    return feedItemView(store, item)
  })







  $($html).find('.feed-card').append(tweets)

  $html.find('button').on('click',(e)=>{
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






  return $html;
}//end of export
