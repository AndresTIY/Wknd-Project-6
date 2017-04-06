export default function initialView (store){
  let $html = $(`
    <div class="initial-card">
      <h1>Twitter Clone</h1>
      <button class="signup">Sign up</button>
      <button class="login">Log in</button>
    </div>
    `)


    $html.find('.signup').on('click', (e)=>{
      console.log('sign up button works');
      //action that takes user to login page
      store.dispatch({type:"SIGN_UP"})

    })
    $html.find('.login').on('click', (e)=>{
      console.log('log in button works');
      //action that takes user to login page
      // store.dispatch({type:"LOAD_DATA"})
    })




  return $html
}//end of export
