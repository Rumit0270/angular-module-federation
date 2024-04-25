## Microfrontend with Module federation in Angular

This is a simple demostration of a micro-frontend app with Webpack Module federation in Angular. It contains 4 sub projects.

- `container`: Main application that is responsible for rendering sub apps
- `first`: Test feature application
- `second`: Test feature application
- `shared-lib`: Shared Library

## Important files to consider

- `angular.json`: All project(s) configurations are added here
- `webpack.config.js`: Each project has a config that exposes remote modules
- `shared-lib/public-api.ts`: Each component/service/module/directive exposed by shared library has to be placed here
- `container/assets/mf.manifest.json`: Manifest file to track accessible remote modules

## References

- [Article](https://www.angulararchitects.io/blog/the-microfrontend-revolution-part-2-module-federation-with-angular/)
- [Managing multiple projects](https://angular.io/guide/file-structure)
