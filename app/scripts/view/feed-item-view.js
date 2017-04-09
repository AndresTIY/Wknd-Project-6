export default function feedItemView(store, item) {
  let milliseconds = item.created;
  let date = new Date(milliseconds);



  let $htmlItem = (`
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
      <button class="del-btn">delete</button>

    </div>
    `)

  let $delBtn = $($htmlItem).find('.del-btn');

  $delBtn.on('click', (e)=>{
    console.log('del button clicksssss');
  })



  return $htmlItem
}//end of export
