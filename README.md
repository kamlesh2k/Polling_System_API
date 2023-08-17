# Polling System API

A Polling System API using NOde JS and MongoDB have Multiple Features

# Features:

1. Create a question.
2. Add options to a question.
3. Add a vote to an option of a question.
4. Delete a question (only if none of its options have votes).
5. Delete an option (only if it has no votes).
6. View a question with its options.


# Routes:

1. POST /questions/create  Create a new question.
Key: question,
Value: "Your Question"

2. POST /questions/:id/options/create  Add options to a specific question.
Key: option,
Value: "Your Option"

3. GET /questions/:id/delete    Delete a question (if no votes are associated with any option).

4. GET /options/:id/delete   To Delete an option (if it has no votes).

5. POST /options/:id/add_vote: Increment the vote count for a specific option.

6. GET /questions/:id   View a question and its options, including the votes given to each option.

# How to Setup
Download ZIP File and Extrat It.
Open it with VS COde
Set UP your own mongoose cluster.
Open Terminal and Type "npm install"
and Then Type "npm start" which will run the project.

# Hosted Link: https://polling-system-api-7ina.onrender.com/

To test, https://polling-system-api-7ina.onrender.com/ {related routes}

Now Open Postman and Enjoy the Features!
