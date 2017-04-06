## Twitter Clone
- Create a Twitter Clone!
- Use full user authentication including:
  - [signup, login, logout]
- Full CRUD functionality for tweets
  - [Create, Retrieve/Read, Update, Delete]
  - User should be able to CRUD their own tweets
- A feed page that allows users to view all tweets posted by all users
- Make site responsive
- Include PROFILE pages that allow users to view only tweets made by the viewed user, as well as info about that user
### Notes
- There should be two tables: [Tweet Table, User Table]
- At least 4 pages, Login, Tweets, 2 more
- Focus on Tweets and users

### Planning

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
}
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




VIEW: 4 pages, Sign up, Login, Feed, Create Tweet
- Make it responsive, start mobile first

- Sign Up View
data seen: [full name, username, email, password]
- Login View
data seen: [email, password]
- Feed View
data seen: [full name, username, messages, time of post]
- User Feed View
data seen: [full name, username, messages, time of post]

- Create Tweet View
data seen: [message, post button]


CONTROLLER: what whens actions
Sign Up
- 
