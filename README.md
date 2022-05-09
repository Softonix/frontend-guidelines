# Softonix Frontend Guidelines
Due to standardization purposes among our teams in Softonix, we would like to have a pretty strict standard project structure based on top of Vue.js CLI.

This repository includes Vue3 + Typescript structure example. 

Besides this, we also propose a list of frontend best practices which we must follow for consistency reasons.

### Prerequisition
- Node v14 or latest
- VueCLI5 (https://next.cli.vuejs.org/migrations/migrate-from-v4.html)

### Vue project structure
- Vue3 + Typescript project structure: [link](https://github.com/Softonix/frontend-guidelines/tree/main/vue3_ts)

Vue project structure:

    src
    ├── assets
    │   │── images                     # global images 
    │   └── styles                     # base styles,  /base, /components, /utils, /vendors, main.scss
    │ 
    ├── components
    │   ├── editor                     # BusinessLogic component, shared acrosss the application which require a folder
    │       ├── Editor.vue             # Main editor component         
    │       ├── EditorBar.vue    
    │       └── editor.js              # Additional logic of Editor component, should be outsourced to js file
    │   ├── stateless                  # Only generic UI components: buttons, tables, 
    │       ├── hoc                    # High Order Components folder
    │       ├── Avatar.vue
    │       ├── Pagination.vue
    │       ├── Tabs.vue
    │       └── MenuList.vue           # Generic Menu List
    │   └── ContactList.vue            # BusinessLogic component shared across the application.
    │
    ├── core 
    │   │── utils  
    │       ├── localstorage.utils.js  # Some generic utility functions related to specific object: e.g.: localstorage
    │       ├── scroll.utils.js        # Scroll utils 
    │       └── tracking.utils.js      # Analytics and tracking functions
    │   │── filters.js                 # Vue core filters
    │   └── helpers.js                 # Combination of separated helper functions like prefentBodyScroll()
    │  
    ├── layouts                        # Nuxt-like layouts
    │   ├── BlankLayout.vue            # Blank layout (no header, no sidebar)
    │   └── DefaultLayout.vue          # Default layout for most of the pages
    │ 
    ├── plugins                    
    │   ├── index.js                   # export all plugins
    │   ├── element.js                 # Element library import
    │   └── sentry.js                  # JS Errors tracking library
    │ 
    ├── router         
    │   ├── index.js                   # Export router, routeNames, invoke guards
    │   ├── route-guard.js             # Declare all router guards
    │   └── route-names.js             # Declare all route names object
    │ 
    ├── services     
    │   ├── index.js                   # Export * from all services accross an app
    │   ├── api.service.js             # Axios config, interceptors. If needed may be moved to folder
    │   ├── tags.service.js            # Tags service - tags used across the app and doesn't have own page
    │   └── auth.service.js            # Auth service - user data, tokens used across the app, sidebar, settings.
    │ 
    ├── store
    │   ├── modules                        
    │       ├── index.js               # Export * from all vuex modules accross an app
    │       ├── tags.store.js          # Tags module - tags used across the app and doesn't have own page
    │       └── auth.store.js          # Auth module - user data, tokens used across the app, sidebar, settings.
    │   ├── index.js                   # Import all modules and initialize store
    │ 
    ├── views
    │   ├── settings     
    │   │   ├── components  
    │   │   │   └── SettingsFilter.vue # Components, related only to settings pages        
    │   │   ├── settings.routes.js     # Route file with declaration for all settings pages.
    │   │   ├── settings.service.js    # Service with API for settings pages 
    │   │   ├── settings.store.js      # Store for all settings pages
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
Very important to keep in mind - we use **/services/** ... not just for API calls, but also for any logic related to that service data.
 
In store modules, we usually call Service methods, to **get()** data for example, but store's actions should be declared only if they are considered to do some commits, which in the end will store some data into state.
If you have a dummy action() in a store which doesn't do **commit** and just does some logic with data, move it to **some.service.js** or **/core/helpers.js**

### Naming convention

- Name folders with kebab case e.g. human-resources and Vue components with PascalCase like: HumanResources.vue
- In Vue's `<template>` write components capitalized, e.g: `<Header />` instead of: `<header>`
- If you want to create a Button component, name it either `ButtonModule.vue` or `ButtonComponent` or `AppButton` to prevent conflicts with native HTML button tag.
- Name root-level components exactly the same as route name: Login.vue === /auth/login route
- Name js files with kebab-case, like: `leave-route.mixin.js` instead of `leaveRoute.mixin.js`
- Name all files inside `/services/` and `/store/` with middleware names like: `auth.service.js` and `auth.store.js` - it will help you to quickly determine what type of file you are editing now
- A component name must exist and should be in `PascalCase` as well as usage in template
- Route name must be provided in `camelCase` to be the same as its key.

### Best practices

- Use Vue order convention for [component options](https://v3.vuejs.org/style-guide/#component-instance-options-order-recommended)
- Use Vue order convention for [element attributes](https://v3.vuejs.org/style-guide/#element-attribute-order-recommended)
- Use Vue linter recommended extensions (see snippets below)
- Use new line after all component's options and between methods & computed properties
- Feel free to split your structure into subfolders. For example, you have a lot of APIs axios interceptors -- please create a folder: `/services/api/` & put the file `interceptors.js` inside of it. Move all your interceptors inside this file. Rename file `api.service.js` into `index.js` and move into `/services/api` as well.
- Use tailwind CSS framework
- Write page/components relative CSS inside .vue files, and keep only general styles inside /assets/styles/
- Always ask the Lead Developer or your Team Leader about project structure best practices and ask for advice.
- Strictly recommended: Do not register your app components globally, instead import them and register locally whenever you are going to use them.
- Write `[props]` as objects using `type` key, instead of strings
- Import order inside Vue file is important: 3rd party libraries, then your .js files, then components.
- Use routeNames object for IDE assistance during names usage.
- Do not use: `export default settingsService` , instead use `export const settingsService`. Always omit default export.

### Linter recommended snippet for Vue3 + TS
- Please check .eslintrc.js file.
