# Softonix Frontend Guidelines
###### This repository includes 3 project structure examples: Vue2, Vue2 + Typescript, Vue3 + Typescript. 
###### Besides this, we also propose a list of frontend best practices which we must follow for consistancy reasons.
---
### Vue project structure
- Vue2 project structure: Link TBA
- Vue2 + Typescript project structure: Link TBA
- Vue3 + Typescript project structure: Link TBA

All 3 projects inherit 1 base folder:

    src
    ├── assets
    │   │── images                     # global images 
    │   ├── styles                     # base styles,  /base, /components, /utils, /vendors, main.scss
    ├── core 
    │   │── filters.js                 # Vue core filters
    │   ├── helpers.js                 # Combination of separated helper functions like prefentBodyScroll()  
    │   └── utils  
    │       ├── localstorage.utils.js  # Some generic utility functions related to specific object: e.g.: localstorage
    │       ├── scroll.utils.js        # Scroll utils 
    │       └── tracking.utils.js      # Analytics and tracking functions
    ├── mixins                         
    │   ├── index.js                   # Export all 
    │   └── leave-route.mixin.js       # Global mixin that being used across the application
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
    ├── plugins                    
    │   ├── index.js                   # Import all plugins
    │   ├── element.js                 # ElementUI library import
    │   └── sentry.js                  # JS Errors tracking library
    ├── router         
    │   ├── index.js                   # Export router, routeNames, invoke guards
    │   ├── guards.js                  # Declare all router guards
    │   └── route-names.js             # Declare all route names object
    ├── store      
    │   ├── index.js                   # Import all modules and initialize store
    │   ├── tags.module.js             # Tags module - tags used across the app and doesn't have own page
    │   └── auth.module.js             # Auth module - user data, tokens used across the app, sidebar, settings.
    ├── services     
    │   ├── index.js                   # Export * from all services
    │   ├── api.service.js             # Axios config, interceptors. If needed may be moved to folder
    │   ├── tags.service.js            # Tags service - tags used across the app and doesn't have own page
    │   └── auth.service.js            # Auth service - user data, tokens used across the app, sidebar, settings.
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

