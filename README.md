In this project let's build a Movies App by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

This is an individual assessment. All work must be your own.

Prerequisites
UI Prerequisites
Click to view
Design Files
Click to view
Set Up Instructions
Click to view
Completion Instructions
Functionality to be added

The app must have the following functionalities
Login Route

When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response should be displayed
When a valid username and password are provided and the Login button is clicked, then the page should be navigated to the Home Route
When an unauthenticated user tries to access the Home Route, Popular Route, Search Route, Account Route and Movie Item Details Route, then the page should be navigated to Login Route
When an authenticated user tries to access the Home Route, Popular Route, Search Route, Account Route and Movie Item Details Route, then the page should be navigated to the respective route
When an authenticated user tries to access the Login Route, then the page should be navigated to the Home Route
Home Route

When an authenticated user opens the Home Route,

An HTTP Get request should be made to Trending Now Movies API URL, Originals API URL with jwt_token in the Cookies

Loader should be displayed while fetching the each data
After the data is successfully fetched from both the API's
A random movie title and movie poster with its details should be displayed from the Originals Response
Display the list of movies received from the Trending Now Movies Response
Display the list of movies received from the Originals Response
If any of the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed respectively
When the Try Again button is clicked, then the respective HTTP GET request should be made
When a Movie item is clicked, then the page should be navigated to the Movie Item Details Route

Header

When the Movies logo in the header is clicked, then the page should be navigated to the Home Route
When the Home link in the Header is clicked, then the page should be navigated to the Home Route
When the Popular link in the header is clicked, then the page should be navigated to the Popular Route
When the Search icon in the header is clicked, then the page should be navigated to the Search Route
When the Profile logo in the header is clicked, then the page should be navigated to the Account Route
Popular Route

When an authenticated user opens the Popular Route

An HTTP GET request should be made to Popular Movies API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Try Again button is clicked, an HTTP GET request should be made to Popular Movies API URL
When a Movie item is clicked, then the page should be navigated to the Movie Item Details Route

All the header functionalities mentioned in the Home Route should work in this route accordingly

Movie Item details Route

When an authenticated user opens the Movie Item Details Route

An HTTP GET request should be made to Movie Item Details API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data
After the data is fetched successfully,
Movie item details received from the response should be displayed
Display the list of similar movies received from the response
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Try Again button is clicked, an HTTP GET request should be made to Movie Item Details API URL
All the header functionalities mentioned in the Home Route should work in this route accordingly

Search Route

When an authenticated user opens the Search Route

When a value is provided in the search input and the button with the search icon is clicked

Make an HTTP GET request to the Search Movies API URL with jwt_token in the Cookies and query parameter search with value as the text provided in the search input
Loader should be displayed while fetching the data
After the data is fetched successfully, display the list of movies received from the response
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Try Again button is clicked, an HTTP GET request should be made to Search Movies API URL
When the HTTP GET request made to the Search Movies API URL returns an empty list for movies then Search no results view should be displayed
When a Movie item is clicked, then the page should be navigated to the Movie Item Details Route

All the header functionalities mentioned in the Home Route should work in this route accordingly

Account Route

When an authenticated user opens the Account Route

The username which was provided in the login, should be displayed
The password which was provided in the login, should be displayed in masked
When the Logout button is clicked, then the page should be navigated to the Login Route
All the header functionalities mentioned in the Home Route should work in this route accordingly

Not Found Route

When a random path is provided as the URL, then the page should navigate to the Not Found Route
Users should be able to view the website responsively in mobile view, tablet view as well

Quick Tips
Click to view
Important Note
Click to view
Resources
Data fetch URLs
User Credentials
Click to view user credentials
Stretch Goals
If you complete the main features of the project you can try out the below features as well.

Note: Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

Additional Functionality to be added
Project Submission Instructions
For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

Also it's important to publish your code frequently using Step - 4 in the Instructions tab.

Things to Keep in Mind
All components you implement should go in the src/components directory.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.