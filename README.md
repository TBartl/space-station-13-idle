# Space Station 13 Idle

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### How to add a new job
1. Create and populate job data, items, and actions in a new file under the `src/data/` folder
2. Add the job in the `src/data/jobs.js` file
3. Create a module for the job in a new file under the `src/state/`
4. Add the job module in the `src/state/store.js` file. Note that it must be added as both a module and in the initial state
5. Add a new content file for the job under `src/components/content/`
6. Add the new file in the `src/components/content/ContentWrapper.vue` file