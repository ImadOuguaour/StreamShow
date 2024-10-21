import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import parser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'], 
    languageOptions: {
      ecmaVersion: 2020, 
      sourceType: 'module',
      globals: globals.browser,
      parser: parser, 
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks, 
      'react-refresh': reactRefresh,
      '@typescript-eslint': eslintPlugin,
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Règles spécifiques pour les hooks React
      '@typescript-eslint/no-unused-vars': 'warn', // Avertir sur les variables inutilisées
      'react-hooks/rules-of-hooks': 'error', // Vérifie les règles des hooks
      'react-hooks/exhaustive-deps': 'warn', // Avertit sur les dépendances manquantes
      'constructor-super': 'off', // Désactive la règle constructor-super
      // Règle pour l'ordre d'importation
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always', // Exige des lignes vides entre les groupes d'import
        },
      ],
      // Règle pour l'ordre des props
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: false,
          shorthandFirst: false,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
    },
  },
  js.configs.recommended, // Règles recommandées d'ESLint
];
