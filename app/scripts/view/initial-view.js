export default function initialView (store){
  let $html = $(`
    <div class="initial-card">
      <h1>Twitter Clone</h1>
      <button class="signup">Sign up</button>
      <button class="login">Log in</button>
    </div>
    `)


    $html.find('.signup').on('click', (e)=>{
      store.dispatch({type:"SIGN_UP"})
    })
    $html.find('.login').on('click', (e)=>{
      store.dispatch({type:"LOGIN"})
    })
  return $html
}
