export default function signupView (store){
  let $html = $(`
    <div class="signup-card">
      <h2>Join Twitter Clone today.</h2>
      <input class="fullname" placeholder="Full name" type="text" name="" value="">
      <input class="username" placeholder="@Username" type="text" name="" value="">
      <input class="email" type="email" placeholder="Email" name="" value="">
      <input class="pw" type="password" placeholder="Password" name="" value="">
      <button>Sign up</button>
    </div>
    `)

    $html.find('button').on('click',(e)=>{
      console.log('sign up button works');
      let name = $html.find('.fullname').val()
      let username = $html.find('.username').val()
      let email = $html.find('.email').val()
      let pw = $html.find('.pw').val()
      store.dispatch({
        type:"CREATE_USER",
        name: name,
        username: username,
        email: email,
        password: pw
      })
    })

    return $html
}
