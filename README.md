# SpacexApiAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



## Tasks

ap link : https://docs.spacexdata.com/#5fc4c846-c373-43df-a10a-e9faf80a8b0a (in this website there is main APi and some child Api for  that)

step 1 Create Two component ( one for launch second for rocket)
 
step 2  create one service which is going to be used for api calling for both the api
 
step 3 in launch component create a table with angular material ( from service you should pass the launch api data to the component then from there you should show in to the table )
 
step 4 you should create a click event in rocket id row and should pass that function in component then from the component we should pass the rocket id to the service
 
step 5 the rocket id which we got then we should create a function in service with which we will be fetching the second api with rocket id and send this data to rocket component make sure you use behaviour subject for transferring and all it will help in transferring changes ( this step is the hardest if you go through this it is very easy )
 
step 6 now we transfer the service rocket api data to rocket component through behaviour subscribe and then show the data to the table
 
step 7  now we create router for both the component and we passed router link in launch component ( rocket id row) so whenever we click it will directly redirect to the component  its done all

step 8 now we create a action button for the launch component or u can say main component in action button when we click it shoul open the Dialog in which it should show yt vid which has been given in the api and it should auto play 

step 9 in launch table we can add some images which is given in the api which has been given for each id we can show in the table  

step 10 In rocket component also there are some images we can use mat card and we can display images and the description which is given in the api and we can add one button name learn more in learn more whenever we click it should redirect to the wikepedia which link is also given in the api 

step 11 in rocket component we can add some exension panel of the angular 

important in all the step we have mostly use angular material