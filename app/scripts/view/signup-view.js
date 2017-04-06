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

    return $html
}
