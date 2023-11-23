# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
- Git clone this repo
- Run `npm install` to install all the dependencies listed in package.json
- Run `npm run start` to start the local development server

## What are React Hooks?
- Functions that let you perform a specific task inside React, like "hooking into" React state or component lifecycles
- Start with the word "use" -- useState and useEffect for example
- Pieces of code (functions) that someone wrote
- Hooks can be inside React or you can import them from somewhere else, but today we'll focus on just useState and useEffect from React
- You can write your own hooks (custom hooks)

## useState
-A hook that creates state variables that React listens to. It "reacts" when the values of these state variables change
- Used when we have variables whose value should change when an event happens (user generated)
- When the value of the state variable changes, React re-renders the component in a smart, optimized way for you
