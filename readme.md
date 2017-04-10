### Requirement Summary

[ ] full user authentication
  - [X] sign up
  - [X] log in
  - [ ] log out, not working correctly, guessing it has to do with the header settings?

[X] CRUD for tweets
  - [X] create , need to log in all over again to create new. need to fix this but moving on
  - [X] read
  - [ ] update
  - [X] delete

[x] Main Feed Page/Tweets by All
[X] User Feed Page
  - [X] maybe add a 'go back' button

[x] Responsive, ish


## Twitter Clone
- Create a Twitter Clone!
- Use full user authentication including:
  - [signup, login, logout]
- Full CRUD functionality for tweets
  - [Create, Read, Update, Delete]
  - User should be able to CRUD their own tweets
- A feed page that allows users to view all tweets posted by all users
- Make site responsive
- Include PROFILE pages that allow users to view only tweets made by the viewed user, as well as info about that user

### Notes
- There should be two tables: [Tweet Table, User Table]
- At least 4 pages, Login, Tweets, 2 more
- Focus on Tweets and users

### Planning
- Tweet table[message, name, username, time, ]
- User table
MODEL: CRUD
Sign Up: Method => POST
 {
  name: string
  username: @ string,
  email: string,
  password: string
}

Login: Method => POST
{
  email: string,
  password: string
}//grab data

Create Tweet: Method => POST
{
  message: string, (less than 140 characters)
}
Tweet Posted and Feed: Method => GET
{
  name: string,
  username: @ string,
  date: value,
  message: string
}
Logout

VIEW: 4 pages, Sign up, Login, Feed, Create Tweet
- Make it responsive, start mobile first

- Initial View, has two buttons for
  - Sign Up or Login

- Sign Up View
data seen: [full name, username, email, password]
buttons/inputs seen: [sign up btn, data as inputs]

- Login View
data seen: [email, password]
buttons/inputs seen: [sign in btn]

- Feed View
data seen: [full name, username, messages, time of post]
buttons/inputs seen: [create tweet, log out, feed tweets, delete, user profile]

- User Feed View/Profile Page
data seen: [full name, username, messages, time of post]
buttons/inputs seen: [create tweet, log out, user feed tweets, delete, main feed btn]
  - feed by user only
  - Info about user

- Create Tweet View
data seen: [message, post button]
buttons/inputs seen:[]
- Tweet Zoomed In View when tweet area clicked on


CONTROLLER: what whens actions
Initial View -> two buttons -> Sign up OR Log In
Sign Up
- Sign Up Button, takes user to feed view
- Dispatch Type: Load Data
- Possible Actions: Load Data, change to main feed
Log In
- Log In Button, takes user to feed view
- Dispatch Type: Load Data
- Possible Actions: Load Data, change to main feed
Main Feed
- Clicking Feed Item pops up box
- User should be able to see a "DELETE" option
- Possible Actions: Create, Delete, Log Out, User Feed
