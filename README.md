#UI Test

##Quick start
1. Make sure you have a version of Node.js equal to or greater than 10.13 installed
2. Clone the repository `https://github.com/estebanramir/ui-tet-zemoga`
3. In the ui-test folder, run the command `npm run install:all` and wait for all the Node modules to be installed
4. In the root folder, run the command `npm run dev`
5. The application is exposed at http://localhost:3000/
6. Happy Code

##Technological decisions

###Front End
For the Front End development, it was decided to use the Next JS framework because it facilitates the creation of server-side-rendered applications using React JS as a base. This technology was chosen mainly because it offers better performance and SEO by rendering the application's HTML from the server.
The rendering speed in this case depends on the processing capacity of the server, which improves loading times in some cases. In this way, multiple instances of the application could also be created according to the growth of requests.
useState was used for the management of specific states per component, additionally, a context was used to manage the state of whether it is grid or list and that it reaches different components that are wanted from a branch of the DOM.

###Back End
Having some experience for the back, and analyzing that the application does not require a large number of concurrent users, it was decided to use Node JS together with Express, which facilitated the creation of the API and the routes of the different endpoints.
