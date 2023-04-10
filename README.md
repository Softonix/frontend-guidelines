# Softonix Frontend Guidelines
Due to standardization purposes among our teams in Softonix, we would like to have a pretty strict standard project structure based on top of Vue.js.

This repository includes Vue3 + Typescript + Vite structure example. 

Besides this, we also propose a list of frontend best practices which we must follow for consistency reasons.

### Prerequisition
- Familiarity with the command line
- Install Node.js version 16.0 or higher
- Create .env file in the project root and place VITE_API_URL=https://jsonplaceholder.typicode.com there.

### Vue project structure

    dts                                # definition files
    │
    public                             # public resources
    │
    src
    ├── assets
    │   │── images                     # global images 
    │   └── styles                     # scss styles including element-reset, tailwind, etc.
    │ 
    ├── components
    │   ├── editor                     # BusinessLogic component, shared acrosss the application which require a folder
    │   │   ├── Editor.vue             # Main editor component         
    │   │   ├── EditorBar.vue    
    │   │   └── editor.ts              # Additional logic of Editor component, should be outsourced to ts file
    │   ├── Avatar.vue
    │   ├── Pagination.vue
    │   ├── Tabs.vue
    │   └── MenuList.vue               # Generic Menu List
    │  
    ├── composables                    # Composition functions used for logic sharing. Can include vue related methods or be just a pure helper function
    │   ├── useFormConfig.ts           # Set of helpers function related to forms and their validation
    │   └── useGlobalProperties.ts     # Composable for getting global properties from Vue instance
    │  
    ├── layouts                        # Nuxt-like layouts
    │   ├── BlankLayout.vue            # Blank layout (no header, no sidebar)
    │   └── DefaultLayout.vue          # Default layout for most of the pages
    │ 
    ├── plugins                    
    │   ├── index.ts                   # exports all plugins
    │   ├── i18n                       # Library for internationalization
    │   ├── portal                     # Set of components for dynamic dom elements teleportation
    │   ├── vue-global-properties      # Plugin for adding something to the vue global properties
    │ 
    ├── router         
    │   ├── index.ts                   # Exports router, invokes guards
    │   ├── route-guard.ts             # Declares all router guards
    │   ├── route-names.ts             # Declares all route names object
    │   └── routes.ts                  # Declares all routes
    │ 
    ├── services     
    │   ├── index.ts                   # Export * from all services accross an app (not needed if using auto-imports)
    │   ├── api.service.ts             # Axios config, interceptors. If needed may be moved to folder
    │   ├── tags.service.ts            # Tags service - tags used across the app and doesn't have own page
    │   └── auth.service.ts            # Auth service - user data, tokens used across the app, sidebar, settings
    │ 
    ├── store
    │   ├── modules                        
    │       ├── tags.store.ts          # Tags module - tags used across the app and doesn't have own page
    │       └── auth.store.ts          # Auth module - user data, tokens used across the app, sidebar, settings
    │   ├── create-store.ts            # Initializes store
    │   ├── index.ts                   # Exports all modules (not needed if using auto-imports)
    │ 
    ├── types
    │   ├── general.d.ts               # Some general types used everywhere in the project
    │   ├── index.ts                   # Exports all types
    │ 
    ├── views
    │   ├── settings     
    │   │   ├── components  
    │   │   │   └── SettingsFilter.vue # Components, related only to settings pages        
    │   │   ├── settings.routes.ts     # Route file with declaration for all settings pages.
    │   │   ├── settings.service.ts    # Service with API for settings pages 
    │   │   ├── settings.d.ts          # Types for settings pages 
    │   │   ├── settings.translations.ts # Settings specific types
    │   │   ├── settings.store.ts      # Store for all settings pages
    │   │   ├── Settings.vue           # Settings root page
    │   │   └── SettingsDetails.vue    # SettingsDetails page
    │   └── users       
    │   │   ├── users.routes.ts     
    │   │   ├── users.service.ts   
    │   │   ├── users.d.ts   
    │   │   ├── users.store.ts  
    │   │   ├── Users.vue  
    │   │   └── UserDetails.vue  
    └── ...

### Store - Services relations
Very important to keep in mind - we use **/services/** ... not just for API calls, but also for any logic related to that service data.

### Naming convention

- Name folders with kebab case e.g. human-resources and Vue components with PascalCase like: HumanResources.vue
- If you want to create a Button component, name it either `ButtonModule.vue` or `ButtonComponent` or `AppButton` to prevent conflicts with native HTML button tag.
- In Vue's `<template>` write components capitalized, e.g: `<AppButton />` instead of: `<app-button />`
- Name root-level components exactly the same as route name: Login.vue === /auth/login route
- Name ts files with kebab-case, like: `some-dummy.service.ts` instead of `someDummy.service.ts`
- Name all files inside `/services/` and `/store/` with middleware names like: `auth.service.ts` and `auth.store.ts` - it will help you to quickly determine what type of file you are editing now
- Route name must be provided in `camelCase` to be the same as its key.

### Best practices

- Use Vue documentation for [conventions and best practices](https://vuejs.org/guide/reusability/composables.html#conventions-and-best-practices)
- Use Vue linter recommended extensions (see snippets below)
- Feel free to split your structure into subfolders. For example, you have a lot of APIs axios interceptors -- please create a folder: `/services/api/` & put the file `interceptors.ts` inside of it. Move all your interceptors inside this file. Rename file `api.service.ts` into `index.ts` and move into `/services/api` as well.
- Use tailwind CSS framework
- Write page/components relative CSS inside .vue files, and keep only general styles inside /assets/styles/
- Always ask the Lead Developer or your Team Leader about project structure best practices and ask for advice.
- Strictly recommended: Do not register your app components globally, instead import them and register locally whenever you are going to use them.
- Import order inside Vue file is important: 3rd party libraries, then your .ts files, then components. (not relevant if using auto-imports)
- Use routeNames object for IDE assistance during names usage.
- Do not use: `export default settingsService` , instead use `export const settingsService`. Always omit default export.

### Linter recommended snippet for Vue3 + TS
- Please check .eslintrc.cjs file.

-------------------------

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### E2E Tests with Playwright

Install all browsers for Playwright

```sh
npx playwright install
```

