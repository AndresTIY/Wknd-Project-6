export default function loginView (store){
  let $html = $(`
    <div class="login-card">
      <h2>Log in to Twitter Clone.</h2>
      <input class="email" type="email" placeholder="Email" name="" value="">
      <input class="pw" type="password" placeholder="Password" name="" value="">
      <button>Log in</button>
    </div>
    `)

    $html.find('button').on('click',(e)=>{
      console.log('login button works');
      let email = $html.find('.email').val()
      let pw = $html.find('.pw').val()
      store.dispatch({
        // type: "VALIDATE_USER"
        type:"TEST_VIEW",
        email: email,
        password: pw
      })
    })

    return $html
}
