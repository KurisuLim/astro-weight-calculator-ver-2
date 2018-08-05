Astro Weight Calculator

Introduction
Welcome to your first JavaScript project!
Consider a scenario where you've been hired by NASA to build an internal tool. Their engineers would like a way to calculate the weight of their various instruments on different planets in our solar system.
This information will be used by the engineers to plan out how much equipment can be transported while still being able to depart the destination planet.
(An example mockup of the finished project)
A tour around an idiomatic folder structure
Idiomatic: A fancy way of saying "How Things Are Usually Done"
As this is your first project, you should take a couple of minutes to get familiar with the names and the purposes of the files we've provided. The folder structure we provide resembles one you're likely to find out in the industry. Here's a quick table to give you an overview.
.git

This is where git stores the files it needs to keep a history of changes made to this folder. You can learn more about the .git folder by reading this Stack Overflow answer.
libs, node_modules, & test

We keep utility code / tests in these folders. You're encouraged to poke around and see what's in these folders, but don't change too much or the tests won't work!
.editorconfig

This file adjusts the settings in most editors to help collaborators work together on a project. It can help prevent disagreements about tabs vs spaces or end of line characters between different operating systems. EditorConfig is a nice to have in any project where other people may work on the code.
.gitignore

There are some files that don't need to be commited to GitHub in this project. This particular .gitignore file tells Git not to include the node_modules folder, because we can simply run npm install to download the contents of this folder between machines.
index.html

This is where you'll write your markup to layout the necessary elements to implement the features of the application.
main.js

This is where you'll write your JavaScript to implement the features of the application.
package.json

Most projects contain a file, usually in the project root called package.json - this file holds various metadata relevant to the project. This file is also used to give information to npm that allows it to identify the project (author name, description etc) as well as handle the project's dependencies. (Dependencies are the inclusion of pre-written code into your project.)
Walkthrough
First, download the starter files for this project by clicking the Download button at the top of this window.
Download the starter files for this project by clicking the Download button at the top of this window.
Open Terminal if you are on a Mac, Git Bash if you are on Windows.
Change directory to the project folder using the following command: cd ~/oca/startnow-web102-astro-weight-calculator
Open the project folder in Visual Studio Code using the following command: code ~/oca/startnow-web102-astro-weight-calculator
Run the following command: npm install.
Now you are ready to begin. Each task has an associated test that will confirm if you have completed the requirements. Your goal is to get all of these tests to pass. Type npm test and hit enter. You should be met with the following screen:


This is the output of a tool we are using called mocha to test your code. You should see a list of failing tests categorized into HTML (asserting your HTML works), JavaScript (asserting your JavaScript works), and Integration (asserting that your HTML and JavaScript are working together correctly).
The goal here is to write code to make the tests pass.
Make the HTML tests pass
Add the following HTML within the <body> element within index.html, save the file, then run npm test in the terminal once again.
<input id="user-weight" type="text" placeholder="Weight (lbs)" />
This is the first <input> element for the project. Spend 5 minutes reviewing the documentation for the Input Element on MDN.
If you put it in the right place, you should be met with the following output.


Hurray! You made your first test pass!
Make the remaining HTML tests to pass then come back. This should take you around 5-10 minutes.
Add a button and give it an id of "calculate-button", and the button text should read "Calculate".
If you're stuck, read this W3Schools HTML tag reference. If that fails, pair with another student or flag down an instructor for help.
I imagine now would be a good time to talk about Test Driven Development, but we'll hold off on that for now while you get familiar with writing code. "Carpe Diem" folks!
JavaScript tests
Alright, got those tests passing? Great! Next up is the JavaScript.
Add the following to your main.js file and tackle the 7 main challenges that once completed will implement the functionality of the website.

// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`



function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight

}

function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.

  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.

  // 5. Create a variable called result and assign the value of the new calculated weight.

  // 6. Write code to display the message shown in the screenshot.

}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
Bonus
After completing the assignment to the point where all the unit tests are passing, make sure you submit your tests through the Origin App. Once your tests have been submitted, push yourself farther by attempting the following bonus items:
There is a divide between the users of this application. Some hold that Pluto is indeed a planet in our solar system, while others do not. Add a checkbox to the application that when checked will remove Pluto as an option in the dropdown list.
NASA has expressed concerns that this tool is only useful if expeditions are made to planets within our solar system, and that they would like the option to add a custom planet with it's multiplier to the dropdown. Add two input fields (one for name, one for multiplier) and a button that once clicked will push a new planet to the dropdown.
Try styling the project with a different styling library such as Bulma or Materialize to bring a modern look to the application.