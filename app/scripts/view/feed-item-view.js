export default function feedItemView(store, item) {
  let milliseconds = item.created;
  let date = new Date(milliseconds);
  let state = store.getState();
  let currentUser = state.currentUser;



  let $htmlItem = $(`
    <div class="item-card">
      <p>
        <span class="name">${item.fullName} </span>
        <span class="user">${item.username}</span>
      </p>
      <p>
      <span class="date">${date}</span>
      </p>
      <p>
        <span class="msg">${item.message}</span>
      </p>
      <div class="del"><button class="del-btn">delete</button></div>

    </div>
    `)



  let $delBtn = $($htmlItem).find('.del-btn');

  if (state.currentUser.username !== item.username){
    $($htmlItem).find('.del').addClass('hidden');
  }

  // if (state.currentUser !== item.username){
  //   console.log(state.currentUser.username);
  //   console.log(item.username);
  //
  // }

  $delBtn.on('click', (e)=>{
    store.dispatch({type:"DEL_TWEET", item: item});
  })

  let $itemName = $($htmlItem).find('.name');

  $itemName.on('click', (e)=>{
    store.dispatch({type:"USER_FEED", userClicked: item.username})
  })



  return $htmlItem
}//end of export
