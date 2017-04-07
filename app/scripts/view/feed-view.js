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
      <button id="opener">open the dialog</button>
      <div id="dialog" title="Dialog Title">I'm a dialog</div>

    </div>
    `)

  var tweets = state.data.data.map((item)=>{
    return feedItemView(store, item)
  })

  $($html).find('.feed-card').append(tweets)

  $html.find('button').on('click',(e)=>{
    //pop up create message form with a send msg button

  })

    $($html).find("#dialog").dialog({ autoOpen: false });
    $($html).find( "#opener" ).click(function() {
    $($html).find( "#dialog" ).dialog( "open" );
  });




  return $html;
}//end of export
