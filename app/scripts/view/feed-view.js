import feedItemView from './feed-item-view.js';

export default function feedView (store){
  let state = store.getState();





  let $html = $(`
    <div class="feed-card">


    </div>
    `)

  var tweets = state.data.data.map((item)=>{
    return feedItemView(store, item)
  })

  $($html).html(tweets)



  return $html;
}//end of export
