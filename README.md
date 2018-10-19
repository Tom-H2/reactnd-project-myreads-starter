# MyReads Project

This MyReads app represents too many hours to accurately report, and relies on too many collaborators to adequately cover. My main contribution has been an unwillingness to give up, and a complete willingness to make jokes around React (and that's not simply an overReaction on my part.) However I want to acknowledge the invaluable help from Project Coaches Doug Brown and Jason Michael White. I also want to thank my study buddy Susan Pommer who has been a constant source of support and good cheer. 

MyReads started with starter code provided by Udacity

The project dependencies were installed with `npm install` and a Python server initiates with `npm start` at http://localhost:3000/.

## Objective of MyReads App

This App is designed to search an API provided by Udacity and be able to shift the books found there between different shelves: "Currently Reading", "Want to Read", and "Read". The "None" option in the pull down menu places the book only in the search results.


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Video tutorial https://www.youtube.com/watch?v=acJHkd6K5kI&feature=youtu.be

This repository is the starter code for _all_ Udacity students.
