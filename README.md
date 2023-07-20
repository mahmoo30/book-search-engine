# book-search-engine ![badge](https://img.shields.io/badge/license-MIT-brightgreen)
Google Books API search engine built with a GraphQL API using Apollo Server.

## 🔍 Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Questions](#questions)

## Description
The app was initially built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. It is now set up to for an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

## 💾 Installation
To install necessary dependencies, run the following command:
- npm install

## Usage
*  GIVEN a book search engine
    - WHEN I load the search engine
        - THEN I am presented with a menu with the options Search for Books and Login/  Signup and an input field to search for books and a submit button
    - WHEN I click on the Search for Books menu option
        - THEN I am presented with an input field to search for books and a submit button
    - WHEN I am not logged in and enter a search term in the input field and click the submit button
        - THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
    - WHEN I click on the Login/Signup menu option
        - THEN a modal appears on the screen with a toggle between the option to log in or sign up
    - WHEN the toggle is set to Signup
        - THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
    - WHEN the toggle is set to Login
        - THEN I am presented with two inputs for an email address and a password and login button
    - WHEN I enter a valid email address and create a password and click on the signup button
        - THEN my user account is created and I am logged in to the site
    - WHEN I enter my account’s email address and password and click on the login button
        - THEN I the modal closes and I am logged in to the site
    - WHEN I am logged in to the site
        - THEN the menu options change to Search for Books, an option to see my saved books, and Logout
    - WHEN I am logged in and enter a search term in the input field and click the submit button
        - THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
    - WHEN I click on the Save button on a book
        - THEN that book’s information is saved to my account
    - WHEN I click on the option to see my saved books
        - THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
    - WHEN I click on the Remove button on a book
        - THEN that book is deleted from my saved books list
    - WHEN I click on the Logout button
        - THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen): This application is covered by the MIT license. 

## Contributing
Fork it, and make a pull request.

## Tests
To run tests, run the following command:
- npm run develop

## Sources
- Starter Code: [REST Api](https://github.com/coding-boot-camp/solid-broccoli)

## ✋ Questions
If you have any questions about the repo, open an issue or contact me directly at wasif.96@gmail.com. <br />
You can find more of my work on GitHub: [mahmoo30](https://github.com/mahmoo30)

#### This README was generated using a [README-generator](https://github.com/mahmoo30/readmegenerator) 🔥🔥🔥

Launched Application: [Book Search Engine](https://pure-bastion-13517-9e04d956763a.herokuapp.com/)
