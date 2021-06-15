module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-prototype-builtins': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': 'off',
    'vue/custom-event-name-casing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T']
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        prefix: ['E']
      }
    ]
  }
}
