## Microfrontend with Module federation in Angular

This is a simple demostration of a micro-frontend app with Webpack Module federation in Angular. Generally, in micro-frontend approach it is consider an anti-pattern to mix the frameworks. Nonetheless, a sub app is created in React and integrated into Angular applications for demonstration purpose for future use case. Each project relies on the same `package.json` file for dependency resolution. This takes away few freedom from our micro frontend architecture but ensures only one Angular Version is active at any given time. We are esentially giving up some freedom for robustness. It contains following sub projects:

- `container`: Main application that is responsible for rendering sub apps (Built with **Angular**)
- `first`: Test feature application (Built with **Angular**)
- `second`: Test feature application (Built with **Angular**)
- `third`: Test feature application (Built with **React**). This app can be written in any other library/framework but needs to export logic as a remote webpack module. Entire app is exported as a web component for easier integration.
- `shared-lib`: Shared Library of common structures like services/components/directives/etc. Do check the `webpack.config.js` file, the configuration determines how the singleton services are tracked and instantiated.

## Important files to consider

- `angular.json`: All project(s) configurations are added here
- `webpack.config.js`: Each project has a config that exposes remote modules
- `shared-lib/public-api.ts`: Each component/service/module/directive exposed by shared library has to be placed here
- `container/assets/mf.manifest.json`: Manifest file to track accessible remote modules

## References

- [Article](https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-module-federation-in-webpack-5/)
- [Managing multiple projects](https://angular.io/guide/file-structure)
