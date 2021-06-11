[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Captain's Log Front-End

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm start` to start the react app on `localhost:3000`
- `npm run cypress` (in a separate terminal tab) to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

Using the [Captain's Log API that you built](https://github.com/joinpursuit/captains-log), you are going to create a frontend-only app.\

Don't forget to keep your back-end API running during this build/

#### Nav Bar

At the top of your app you should have a navigation bar.

- It displays links to each primary route (`/logs`, `/logs/new`) at the top of the page.

Your app should also include the following routes:

<hr />

### `/logs`

- Displays a list of `log.title` that are clickable to take the user to `/logs/:index`.


### `/logs/:index`

- Displays the details of each log
  - captainName
  - title
  - post
  - mistakesWereMadeToday
  - daysSinceLastCrisis
- Displays two buttons
  - <kbd>back</kbd>, takes the user back to the `/logs` view
  - <kbd>delete</kbd>, deletes the log and takes the user back to the `/logs` view


### `/logs/new`
- Displays a form with the following inputs and appropriate labels:
  - captainName (text)
  - title (text)
  - post (text)
  - mistakesWereMadeToday (checkbox)
  - daysSinceLastCrisis (number)
  - submit (submit)

### Bonuses
- Add an edit route
- Add an edit form that is prefilled with the log to edit
- Style the app
- Use react-bootstrap
- Use react-transition-group to transition between pages [Demo](https://reactrouter.com/web/example/animated-transitions)
- write your own tests for the edit route
- add a 404 page
- add functionality that when a user presses the delete button a confirmation appears first
