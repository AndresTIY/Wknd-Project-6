export default function feedItemView(store, item) {
  let milliseconds = item.created;
  let date = new Date(milliseconds);



  let $html = (`
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
    </div>
    `)




    return $html
}//end of export
