# Local Setup Steps (Tested on WSL Ubuntu):  
1. Check if current Node.js version matches the version number written in .nvmrc; if not, run `nvm use` and check again.
2. Run `npm install`.
3. The project is using Prettier for formatter and Eslint for linter. If you are using VSCode, please install Prettier and Eslint plugins and format your change using Prettier. Eslint check will be enforced when making commits.
4. Run `npm run storybook`
5. The Storybook webpage should be launched on http://localhost:6006/?path=/story/example-introduction--page
