# Softonix Frontend Guidelines
Due to standardization purposes among our teams in Softonix, we would like to have a pretty strict standard project structure based on top of Vue.js CLI.

This repository includes 2 project structure examples: Vue2, Vue3 + Typescript. 

Besides this, we also propose a list of frontend best practices which we must follow for consistancy reasons.

### Vue project structure
- Vue2 project structure: [link](https://github.com/Softonix/frontend-guidelines/tree/main/vue2)
- Vue3 + Typescript project structure: Link TBA

All 3 projects inherit 1 base folder:

    src
    ├── assets
    │   │── images                     # global images 
    │   └── styles                     # base styles,  /base, /components, /utils, /vendors, main.scss
    │
    ├── core 
    │   │── filters.js                 # Vue core filters
    │   ├── helpers.js                 # Combination of separated helper functions like prefentBodyScroll()  
    │   └── utils  
    │       ├── localstorage.utils.js  # Some generic utility functions related to specific object: e.g.: localstorage
    │       ├── scroll.utils.js        # Scroll utils 
    │       └── tracking.utils.js      # Analytics and tracking functions
    │ 
    ├── mixins                         
    │   ├── index.js                   # Export all 
    │   └── leave-route.mixin.js       # Global mixin that being used across the application
    │ 
    ├── components
    │   ├── stateless                  # Only generic UI components: buttons, tables, 
    │       ├── hoc                    # High Order Components folder
    │       ├── Avatar.vue
    │       ├── Pagination.vue
    │       ├── Tabs.vue
    │       └── MenuList.vue           # Generic Menu List
    │   ├── layout                     # Nuxt-like layouts
    │       ├── Default.vue            # Default layout for most of the pages
    │       └── Blank.vue              # Blank layout (no header, no sidebar) 
    │   ├── editor                     # BusinessLogic component, shared acrosss the application which require a folder
    │       ├── Editor.vue             # Main editor component         
    │       ├── EditorBar.vue    
    │       └── editor.js              # Additional logic of Editor component, should be outsourced to js file
    │   └── ContactList.vue            # BusinessLogic component shared across the application.
    │ 
    ├── plugins                    
    │   ├── index.js                   # Import all plugins
    │   ├── element.js                 # ElementUI library import
    │   └── sentry.js                  # JS Errors tracking library
    │ 
    ├── router         
    │   ├── index.js                   # Export router, routeNames, invoke guards
    │   ├── guards.js                  # Declare all router guards
    │   └── route-names.js             # Declare all route names object
    │ 
    ├── store      
    │   ├── index.js                   # Import all modules and initialize store
    │   ├── tags.module.js             # Tags module - tags used across the app and doesn't have own page
    │   └── auth.module.js             # Auth module - user data, tokens used across the app, sidebar, settings.
    │ 
    ├── services     
    │   ├── index.js                   # Export * from all services
    │   ├── api.service.js             # Axios config, interceptors. If needed may be moved to folder
    │   ├── tags.service.js            # Tags service - tags used across the app and doesn't have own page
    │   └── auth.service.js            # Auth service - user data, tokens used across the app, sidebar, settings.
    │ 
    ├── views
    │   ├── settings             
    │   │   ├── settings.routes.js     # Route file with declaration for all settings pages.
    │   │   ├── settings.service.js    # Service with API for settings pages 
    │   │   ├── settings.store.js      # Store for all settings pages
    │   │   ├── components  
    │   │   │   └── SettingsFilter.vue # Components, related only to settings pages
    │   │   ├── Settings.vue           # Settings root page
    │   │   └── SettingsDetails.vue    # SettingsDetails page
    │   └── users       
    │   │   ├── users.routes.js     
    │   │   ├── users.service.js   
    │   │   ├── users.store.js  
    │   │   ├── Users.vue  
    │   │   └── UserDetails.vue  
    └── ...

### Store - Services relations
Very important to keep in mind - we use **/services/** ... not just for API calls but also for any logic relative to that service data. In store modules, we usually call Service methods, to **get()** data for example, but store should include actions only which in the end will store some data into state. If you have dummy action() in store which doesn't do **commit** and just doing some logic with data, move it to **some.service.js** or **/core/helpers.js**

### Naming convention

- Name folders with lowercase and Vue components capitalized like: Dashboard.vue
- In Vue's `<template>` write components capitalized, e.g: `<Header />` instead of: `<header>`
- If you want to create a Button component, name it either `ButtonModule.vue` or `ButtonComponent` or `AppButton` so it would not conflict with native HTML button tag.
- Name root-level components exactly the same like route name: Login.vue === /auth/login route
- Name js files with dash case, like: `leave-route.mixin.js` instead of `leaveRoute.mixin.js`
- Name all files inside `/services/` and `/store/` with middleware names like: `auth.service.js` and `auth.store.js` - it will help you to quickly determine what type of file you are editing now
- Component name must exist and should be in `PascalCase` as well as usage in template
- Route name must be provided in `camelCase` to be the same as its key.

### Best practices

- Use Vue order convention for [component options](https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended)
- Use Vue order convention for [element attributes](https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended)
- Use Vue linter recommended plugin:vue/recommended (see snippet below)
- Use new line after all component's options and between methods & computed properties
- Feel free to split your structure into subfolders. For example, you have a lot of API axios interceptors -- please create a folder: `/services/api/` & put the file `interceptors.js` inside of it. Move all your interceptors inside this file. Rename file `api.service.js` into `index.js` and move into `/services/api` as well.
- Use tailwind CSS framework
- Write page/components relative CSS inside .vue files, and keep only general styles inside /assets/styles/
- Always ask the Lead Developer or your Team Leader about project structure best practices and ask for advice.
- Strictly recommended: Do not register your app components globally, instead import them and register locally whenever you are going to use them.
- Write `[props]` as objects using `type` key, instead of strings
- Import order inside Vue file is important: 3rd party libraries, then your .js files, then components.
- Use routeNames object for IDE assistance during names usage.
- Do not use: `export default settingsService` , instead use `export const settingsService`. Always omit default export.

### Linter recommended snippet for Vue2 (no-ts)
```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120 }],
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/custom-event-name-casing': 'off'
  }
}

```
