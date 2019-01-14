# WebCV

This is a project I made looking for an internship in Full-Stack web development, when i though that old pdf resumes are out of date, and we should have a more fun way of showing your experiences / interests.

Demo available [here](aymericbouzigues.fr)


## Running app locally

Firs run `npm install` to install dependencies (if you don't have npm, please follow [this tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-node-js-and-npm) then you should install the latest version of angular [here](https://angular.io/guide/quickstart)).

Then, run `ng serve` for a dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.s

## Adding a new page to the route

Run `ng generate component component-name` to generate a new component (thas will serve as your new page).

Then append the page name with your component name in the `app.module.ts` file using this syntax :
```javascript
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Full-stack internship' } },
  { path: 'home', component: HomeComponent, data: { title: 'Full-stack internship' } },
  { path: 'overview', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'indepth', component: IndepthComponent, data: { title: 'In-depth view' } }
];
```

Don't forget to import the component in the beginning of the `app.module.ts` file.
Then, just add the page with the same route in the navbar section under :
```html
<mat-nav-list>
  <a mat-list-item routerLink='/home'>Home</a>
  <a mat-list-item routerLink='/overview'>Overview</a>
  <a mat-list-item routerLink='/indepth'>In depth Experiences</a>
</mat-nav-list>
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Please contact me if you have no idea how to serve this or you want a good (and cheap) way of doing it.
