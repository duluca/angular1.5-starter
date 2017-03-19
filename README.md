# Angular 1.5+ and Angular Material Starter Project
## A batteries-included Mobile-First Angular 1.5+ and Angular Material Seed
> _TL;DR:_ Scroll to the bottom for commands you need to run

Angular Starter demonstrates several important concepts in building a scalable code architecture for Angular 1.5.x. Following the patterns demonstrated in this project will help write clean, maintainable code that is more inline with Angular 2.0 style coding.

Launch demo [here](http://ng15demo.thejavascriptpromise.com/).

Pull the Docker Image [![](https://images.microbadger.com/badges/version/duluca/angular1.5-starter.svg)](https://microbadger.com/images/duluca/angular1.5-starter "Get your own version badge on microbadger.com") `docker pull duluca/angular1.5-starter`

![Login](https://cloud.githubusercontent.com/assets/822159/23826750/3b66344c-0671-11e7-91e7-8c0dafa89309.png)

> _Notice:_ While, this is my recommend Angular 1.x code architecture for production use, please not that this technique is not supported beyond Angular 1.5.11 due to changes in Angular 1.6, which lacks Angular Material 1.1.3 support and  ngComponentRouter@0.2.0. Read further below for more details.

## Why Use This Starter?
This project leverages components and the component router technology, similar to the way they're utilized in Angular 2. Using ngComponentRouter, Angular Material 1.1.3 and Angular 1.5.11, you can build great production quality applications. The component architecture allows you to follow clean code and SOLID principals, where you can build multi-hundred view apps without your code architecture collapsing under its own weight.

Meanwhile you'll be introduced to concepts that form the basis of Angular 2, while leveraging your Angular 1.x skills. If you're looking for a 3-5+ year solution, I _highly_ recommend you start with Angular 2, as that is the foundational framework that'll be supported for Angular v.Next beyond Angular 2.

For a complete example of how to leverage majority of the features of the router, see https://github.com/duluca/angular1.5-starter. Fork it, create issues with it, otherwise just clone it and use it.

## Concepts Covered
### Scalable Angular Architecure
- Learn how to write Angular components, ditch `$scope` forever
- Create reusable and nested components - see how the `Dashboard` component is a child of `Admin` the admin component. This is true from a routing perspective, folder organization perspective and dependency management perspective. Seperating all of these 3 concerns is critical in allowing multiple teams or team members to work on the same app without impacting each other or creating nasty merge conflicts.
- Define child root routes that can define their own route structure
- Use Promise-based service calls

### Great Looking Mobile-First Design & Form Validation with Angular Material
![Navigation](https://cloud.githubusercontent.com/assets/822159/23826746/235bc952-0671-11e7-9f46-5aa7f2242aff.png)
- Learn how you can incorporate Angular Material with a responsive design in to your app
- `SideNav` with a hamburger menu and a top `NavBar` provide a complimentary navigation experience
- Properly validate Angular forms, leveraging ng-messages
- Access rich and easy to use Material Desing Icons (mdi) icon library
- Included Angular Material Data Table library for paginated datagrids (see source repo for sample usage)
- `Ui` service that convienently wraps Material function for toast notifications and simple alerts to call from your code.

### Authentication Hooks and Role Based Navigation
<img width="259" alt="Form Validation" src="https://cloud.githubusercontent.com/assets/822159/23826740/07bb83cc-0671-11e7-91fc-0b6c53ed9769.png">
- Sample Authentication and Account services demonstrate how to do role based security
- Enfore security and roles in navigation using ngComponentRouter lifecycle hooks
- Utilize pre-built Material design login component with iOS style shake animation on error
- Bring your own auth library and hook it in to `Auth` service provided
- Use pre-built caching service that leverages $cookies

### Packaging and Publishing Best Practices
- Use npm as your only dependency repository with Browserify
- npm-shrinkwrap locks down your dependencies to avoid issues with other developers or deployments to servers
- Use Gulp.js to streamline build tasks
- Pre-built Gulp tasks to minify, combine JS, HTML and publish other static assets
- Enforce clean-room development environment to avoid mistakes and accidental exposure of assets, because `public` folder is created from scratch every time
- Use JsHint for enforcing coding style standards (linting)

### Unit Testing
- This is notably missing from this starter. It is a topic that too often gets left out. I recommend using Jasmine to test particular JavaScript functions, which you can isolate to their own files using `module.exports` and write simple unit tests.
- Selenium tests are a great way to smoke test the major functions of your app. Getting too granular than that is a loosing battle.
- Your mileage may vary with Protractor.
- I highly recommend that all your important business logic to reside server-side and unit tested there.

### Find Your Way Around the Code
- I recommend using Visual Studio Code as your code editor.
- All dependencies come from npm. As a result, your first stop should be `package.json`. Understand what each package does.
- All of your static assets should go under the `static` folder. `index.html` should rarely ever be updated. All `js` and `html` files are combined to a single file. A notable exception is `css` because you may want to change those links to `CDN` targets and I find it unreliable to compile, combine or minify 3rd party `css` resources.
- All Angular Code goes under the `app` folder. App is bootstrapped in `app/component/app/app.js`.
- `Public` folder is the only folder you should serve to the public internet. It is built from scratch everytime, so doesn't make any changes in there. Ignore the `scratch` folder completely.

## How to Run the Project
There are two ways to run the project, one by building the source code yourself, the other by running the Docker image.

### Run via Building Source Code
- From the root application directory run the following:
- `npm install gulp-cli -g`
- `npm install http-server -g` (This is required to serve the project from your local folder)
- `npm install`
- `npm start`

### Run via Docker
- `npm run image:run` -- See package.json for details. Default port will be http://localhost:8080

For further details on how the Docker image is put together, refer to https://github.com/duluca/minimal-node-web-server.

### Dev Norms
See `dev-norms.md` for a set of sensible default norms for your team to follow. Modify and update as a living repository of your norms.