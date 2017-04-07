import feedItemView from './feed-item-view.js';

export default function feedView (store){
  let state = store.getState();





  let $html = $(`
    <div>
      <header>
        <h2>Share Your Thoughts</h2>
        <button type="button" name="button">
          <i class="fa fa-comment-o" aria-hidden="true"></i>
        </button>
      </header>
      <div class="feed-card">
      </div>
    </div>
    `)

  var tweets = state.data.data.map((item)=>{
    return feedItemView(store, item)
  })

  $($html).find('.feed-card').append(tweets)



  return $html;
}//end of export
