# AskyQuizzy

This is a program that allows users to take a quiz, decide what number of questions it has, be able to read feedback according to each question and look at the leaderboard with usernames and scores in descending order. It's a fun, easy way to answer questions and see who has the most correct answers.

## Usage

At the main menu the user will write their username and select how many questions they want to answer, if they do not wish to resolve a quiz, then they can also see the Leaderboard pressing the adequate button. After writing their name and selecting a number, then they can press the Continue button. This will take them to the next page, that will display a question and the answer options. In case of selecting the wrong answer, a feedback alert will appear, indicating to them what was the right answer. After all questions have been displayed and answered, the screen will show the score, and the Leaderboard, where they can go back to the main menu to retake the quiz.

## System Diagram

<img width="638" alt="diagraam" src="https://github.com/MelFadanelli/QuizApp/assets/69481052/0c9fb044-d7ca-48c3-9a90-6c0fa0de668d">

Along the way, we changed the system diagram according to the decisions made, making it simpler, and more accurate to the actual process that the work follows. At first we were considering using a relational database to store the questions and the answer separately, but we realized that it wasn’t necessary. So we decided to merge those tables into a single mongodb database.

## Patterns Used

The Design Pattern used can be seen as Proxy, because the client communicates through Flask with requests, that when responded is sent certain information. Because we used a MongoDb database, we thought it was the pattern that best accommodates our necessities and would be easy to understand and make the communication between frontend and backend. We chose this way because it makes our database easier to store and use when necessary. The react app is able to take the .json files and read them so the app can function. In this case, we can see the communication with Flask as a placeholder for the data displayed and saved inside the Mongo database. 
In terms of architecture, this system follows the Client-Server. Because this is a web application, the ability to provide the needed functionality to various clients is important, the advantages include the way it can be maintained from a single place, it also requires low resources in comparison to other architectures.
The process it follows starts with storing in a json file the username that is written in the input field. Then when selecting the number of questions, the process of displaying a form is repeated the indicated number of times. The questions are selected from another json file, that has the questions, the options and the wrong answers, this data is shown on the screen and the user can select an answer. If the answer given is correct, a counter will keep track of the score, if it’s incorrect, then the screen will show the feedback included in the json file. After the process is repeated the number of times the user chose, the quiz will be finished, showing the Leaderboard, and the final score for the user that answers the questionnaire.

## Testing

Unit Testing:
-In “Main menu” the class must return the username and the number of correct answers.
	-Test with a small username and 10 questions
	-Test with a big username with numbers and 2 questions
	-Test with a username with special characters and 7 questions
-In “Question Display” the class must return the question and the multiple options
	-Test with a question and small answers
	-Test with a question and big answers
-In “Leaderboard” the class must be able to send JSON data

## Installation

Download the zip file from Github or clone the repository: https://github.com/MelFadanelli/QuizApp 
On QuizApp\Frontend\quizzapp run the following command on a terminal:
```bash
npm install
```
Then, on the same address run the following command:
```bash
npm start
```
The application should begin shortly.

Alternatively, you can access https://askyquizzy.me/ and view the live results from the web. 

