module.exports = {
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb'
    ],
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        },
        extraFileExtensions: ['.json']
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'globals': {
        'beforeAll': true,
        'expect': true,
        'jest': true,
        'Promise': true,
        'describe': true,
        'it': true,
        'DEV_PICK_ENV': true,
        'CONFIG': true,
        'APP_NAME': true
    },
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        }
    },
    'rules': {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'off',
            { allowTypedFunctionExpressions: true }
        ],
        'arrow-body-style': 'off',
        'global-require': 'off', // Temporary
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        'class-methods-use-this': 0,
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore'
        }],
        'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
        'import/no-extraneous-dependencies': 'off',
        'indent': ['error', 4],
        'import/no-unresolved': 'warn', // fix later for Unable to resolve path to module 'Types'
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'linebreak-style': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', 150],
        'no-alert': 'off',
        'no-console': 'off',
        'react/no-danger': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-plusplus': 'off',
        'no-restricted-globals': 'error',
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'ForOfStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'no-script-url': 'off',
        'no-unused-vars': 'off', // To avoid conflicts with @typescript-eslint/no-unused-vars
        'no-use-before-define': 'off',
        'prefer-destructuring': 'off',
        'prefer-promise-reject-errors': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'react/destructuring-assignment': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-empty-interface': 'off', // Temporary
        'default-case': 'off', // Temporary
        'import/no-dynamic-require': 'off', // Temporary
        'import/no-named-default': 'off', // Temporary
        'import/prefer-default-export': 'off', // Temporary
        'jsx-a11y/alt-text': 'warn', // Temporary
        'jsx-a11y/iframe-has-title': 'warn', // Temporary
        'max-classes-per-file': 'off', // Temporary
        'no-case-declarations': 'off', // Temporary
        'no-loop-func': 'off', // Temporary
        'no-nested-ternary': 'off', // Temporary
        'no-restricted-properties': 'warn', // Temporary
        'no-shadow': 'off', // Temporary
        'react/jsx-props-no-spreading': 'off', // Temporary
        'react/jsx-no-bind': 'off', // Temporary
        'react/jsx-no-target-blank': 'off', // Temporary
        'react/no-did-update-set-state': 'off', // Temporary
        'react/no-find-dom-node': 'off', // Temporary
        'react/no-unused-state': 'off', // Temporary
        'react/no-array-index-key': 'off', // Temporary
        'react/no-access-state-in-setstate': 'off', // Temporary
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off', // Temporary
        'react/static-property-placement': ['error', 'static public field'],
        'react/sort-comp': 'off' // Temporary
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off'
            }
        }
    ]
};
