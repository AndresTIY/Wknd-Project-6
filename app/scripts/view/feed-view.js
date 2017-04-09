import feedItemView from './feed-item-view.js';

export default function feedView (store){
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

  var tweets = state.data.data.map((item)=>{
    return feedItemView(store, item)
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





  // $($html).find('.del-btn').on('click', (e)=>{
  //   console.log(e);
  //   // let tweetsToDel = state.data.data.map((item)=>{
  //   //
  //   //     return item.objectId
  //   //     // console.log(currentUser.ownerId);
  //   //
  //   // })
  //   // store.dispatch({type:"DEL_TWEET", item: tweetsToDel})
  //
  //   console.log('delete button works');
  //
  // })









  $($html).find('.feed-card').append(tweets)

  return $html;
}//end of export
