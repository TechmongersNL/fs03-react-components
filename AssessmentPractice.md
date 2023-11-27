# 🧙‍♂️ React Assessment Practice

(This is a markdown .MD file, if you are reading this in VSCode, right click the file and select `Open Preview`)

#### Rules for this challenge

- You are allowed to consult Kyna, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this challenge public in any ways
- If you do use a tool like ChatGPT and copy code from it, you must include a `Sources.md` file in your repo that explains why you used ChatGPT, what prompts you used, and what code you copied

#### Duration

- This assessment ends at 4:00pm

#### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed the mandatory sections. `Fail grade`.

- 📒 Yellow: you've completed all mandatory sections + one bonus. `Pass grade`.

- 📗 Green: you've completed all mandatory sections + 2 bonus. `Pass with honor grade`.

🚨 **If you've completed both mandatory sections, but it's not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting this assessments takes time. Please be patient with regards to getting the results of your assessments. Results are planned to go out the following week between Monday and Tuesday.

#### How to make and submit your assessment

- Use `npx create-react-app` to create a new react app
- Add these instructions to your repo as `Instructions.md`
- `create-react-app` will initialize a git repository for you, so don't make one yourself
- Go to `github.com` and
  - create a new `private` repository
  - make sure **NOT** to initalize with a readme/.gitignore as it will give you errors when you will try to push
  - Add the evaluator to your repository as a `collaborator` (tessawiedmann, wearethefoos)
- Add your newly created git repository as a remote to your react app
- Push the initial version of your app created by `create-react-app`
- If you need help with git/GitHub setup, you can ask a teacher
- Start your react app with `npm run start`, as usual, and start programming

#### Self assessment
- After you finish the assessment, fill out this form:

👉 [React Challenge Form](*LINK WILL BE INSERTED HERE*)

#### What to expect after submitting this challenge?

- If you scored a red, a teacher will contact you for a conversation
- In case you scored yellow or green, you don't have to expect a conversation, but feel free to reach out to a teacher if you have questions

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:
- Creating components
- Nesting components and passing them data via props
- Using event listeners and event handlers, like onClick
- Designing and managing component local state with useState hook
- Using the useEffect hook to fetch data from an API using Axios
- Using react-router-dom to make static and dynamic routes
- Using npm to install packages

Additional learning goals include:
- Creating input forms and console logging the results
- Mapping, filtering, finding & sorting arrays of objects
- Basic git and GitHub usage: making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. See the rules above for resources you are allowed to use

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

**TIP: Focus on the required features first!** Before moving to the bonus sections of this assessment, focus on implementing the madatory parts, then move on to the next ones.

## What are we building?

We are building a webapp for a Harry Potter fanclub. We want the following features:

#### Required Features
- HomePage that says "welcome to harry potter site"
    - On homepage we have a button that says "go to character list"

- Character List page
	- Use API /characters
	- Each character is separate component
	- Each character can be liked and favorited
		- When character is liked, a counter of likes increase
		- When character is favorited, a star appears. If they are unfavorited, the star disappears
	- The total number of likes is at the top of the character list page
	- Each characters has a "see details" link that takes them to their detail page

- Character Detail page
	- List all the details for each character
	- Uses /characters/:id API

#### Bonus Features
- Bonus things you can try:
	- Add filter to character list page, like filter by name or patronus, or birthday month
	- Add a button that can also decrease the amount of likes
	- Add ability to sort character list by different things, like alphabetical order
	- Add a new page from home page to "add new student"
		- This new page should have an input form to enter info about the new student
		- Console log this the info

## API

The data for this app is already available through an API. This way you can build your entire app without having to create a working API yourself.

Endpoints:

GET /characters

`https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters`

GET /characters/:id

`https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters/:id`
