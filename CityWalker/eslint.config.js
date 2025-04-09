// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactNative from 'eslint-plugin-react-native';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'react-native': eslintPluginReactNative,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react-native/no-inline-styles': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
