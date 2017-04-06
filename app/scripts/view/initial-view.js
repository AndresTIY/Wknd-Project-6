export default function initialView (store){
  let $html = $(`
    <div class="initial-card">
      <h1>Twitter Clone</h1>
      <button class="signup">Sign Up</button>
      <button class="login">Log In</button>
    </div>
    `)
  return $html
}//end of export
