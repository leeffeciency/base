import jsdoc from 'eslint-plugin-jsdoc';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';

// @ts-check
export default tseslint.config(
  {
    ignores: ['dist', 'cache', 'docs', 'node_modules/**'],
  },
  eslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  /**
   * Contains all of `recommended`, `recommended-type-checked`, and `strict`, along with additional strict rules that require type information.
   * @see @link https://typescript-eslint.io/users/configs#strict-type-checked}
   */
  ...tseslint.configs.strictTypeChecked,
  /**
   * Contains all of `stylistic`, along with additional stylistic rules that require type information.
   * @see {@link https://typescript-eslint.io/users/configs#stylistic-type-checked}
   */
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs['flat/recommended'],
  prettierConfig,
  {
    languageOptions: {
      parserOptions: {
        /**
         * @see @link https://typescript-eslint.io/packages/parser/#projectservice
         */
        projectService: true,
        /**
         * Configuration for TypeScript ESLint's tsconfig.json resolution
         *
         * @example
         * // eslint.config.js
         * export default [{
         *   languageOptions: {
         *     parserOptions: {
         *       tsconfigRootDir: import.meta.dirname
         *     }
         *   }
         * }]
         *
         * The `tsconfigRootDir` option specifies the base directory for resolving tsconfig.json files.
         * Using `import.meta.dirname` sets this to the ESLint config file's location, providing:
         *
         * 1. Consistent Resolution: Always uses the ESLint config file's directory as the base,
         *    regardless of where ESLint is executed from
         *
         * 2. Path Stability: Ensures reliable tsconfig.json resolution in various environments:
         *    - Local development
         *    - CI/CD pipelines
         *    - Different working directories
         *
         * 3. Modern ESM Support: Uses `import.meta.dirname` instead of Node.js's `__dirname`,
         *    making it compatible with ECMAScript Modules
         *
         * Without this setting, tsconfig.json resolution would depend on the current working
         * directory, potentially leading to inconsistent or failed linting results.
         */
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    linterOptions: {
      /**
       * ESLint Unused Disable Directives Reporter
       *
       * The `reportUnusedDisableDirectives` option helps maintain code quality by
       * identifying unnecessary ESLint disable comments. When set to true, it will
       * warn about eslint-disable directives that aren't actually needed.
       *
       * @example
       * // Will trigger a warning because the rule disable isn't needed
       * // eslint-disable-next-line no-unused-vars
       * const usedVariable = 42;  // This variable is actually used
       * console.log(usedVariable);
       *
       * Benefits:
       * 1. Maintains higher code quality by removing unnecessary rule suppressions
       * 2. Prevents technical debt from outdated disable comments
       * 3. Improves code maintainability by keeping only necessary overrides
       *
       * This feature is particularly valuable in large codebases where ESLint
       * rule disabling might accumulate over time.
       */
      reportUnusedDisableDirectives: true,
    },
    rules: {
      /**
       * ========================================================================
       * ESLint Configuration
       * ========================================================================
       * Extends from eslint:recommended
       */
      /**
       * @section Possible Problems
       * @see https://eslint.org/docs/latest/rules/#possible-problems
       */
      'array-callback-return': [
        'warn',
        {
          checkForEach: true,
          // Recommended by unicorn
          // @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
          allowImplicit: true,
        },
      ],
      'no-await-in-loop': 'error',
      'no-constructor-return': 'error',
      'no-inner-declarations': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-assignment': 'error',
      'require-atomic-updates': 'error',
      /**
       * @section Suggestions
       * @see https://eslint.org/docs/latest/rules/#suggestions
       */
      'accessor-pairs': 'warn',
      'arrow-body-style': 'warn',
      'block-scoped-var': 'warn',
      complexity: 'warn',
      'consistent-this': 'warn',
      curly: 'error',
      'default-case-last': 'warn',
      eqeqeq: ['error', 'always', { null: 'always' }],
      'func-name-matching': 'warn',
      'func-names': 'warn',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': 'warn',
      'guard-for-in': 'error',
      'logical-assignment-operators': 'warn',
      'new-cap': 'warn',
      'operator-assignment': 'warn',
      'object-shorthand': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'warn',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'warn',
      'prefer-object-spread': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'warn',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'warn',
      'require-unicode-regexp': 'warn',
      'sort-vars': 'warn',
      strict: 'warn',
      'symbol-description': 'warn',
      'vars-on-top': 'warn',
      yoda: 'warn',
      'no-alert': 'error',
      'no-bitwise': 'warn',
      'no-caller': 'error',
      'no-console': 'error',
      'no-div-regex': 'warn',
      'no-else-return': ['warn', { allowElseIf: false }],
      'no-eq-null': 'warn',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
      'no-implicit-globals': 'warn',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'warn',
      'no-multi-assign': 'error',
      'no-multi-str': 'warn',
      'no-negated-condition': 'warn',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-proto': 'error',
      'no-return-assign': ['warn', 'always'],
      'no-script-url': 'error',
      'no-sequences': ['error', { allowInParentheses: false }],
      'no-undef-init': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-rename': 'error',
      'no-useless-return': 'warn',
      'no-var': 'warn',
      'no-void': ['warn', { allowAsStatement: true }],
      /**
       * ========================================================================
       * ESLint Rules Disabled in Favor of TypeScript-ESLint
       * ========================================================================
       *
       * @description
       * These rules are disabled because better alternatives exist in @typescript-eslint.
       * Their presence here helps detect accidental enabling of ESLint rules
       * when TypeScript versions should be used instead.
       *
       * @note
       * These rules are not enabled by default ESLint configs.
       * They are explicitly disabled here for clarity and prevention.
       */
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'default-param-last': 'off',
      'dot-notation': 'off',
      'init-declarations': 'off',
      'max-params': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-implied-eval': 'off',
      'no-invalid-this': 'off',
      'no-loop-func': 'off',
      'no-magic-numbers': 'off',
      'no-redeclare': 'off',
      'no-restricted-imports': 'off',
      'no-return-await': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'prefer-destructuring': 'off',
      'prefer-promise-reject-errors': 'off',
      'require-await': 'off',
      /**
       * ========================================================================
       * TypeScript Configuration
       * @see https://typescript-eslint.io/rules
       * ========================================================================
       * Extends from strictTypeChecked, and stylisticTypeChecked configs
       */
      /**
       * Enforce using `type` over `interface`
       *
       * @description
       * Types provide stronger type safety than interfaces by preventing:
       * - Declaration merging
       * - Implicit index signatures
       * - Extending unexpected interfaces
       *
       * @example
       * // ✅ Preferred: Type alias
       * type User = {
       *   id: number;
       *   name: string;
       * }
       *
       * // ❌ Avoid: Interface can be unexpectedly extended
       * interface User {
       *   id: number;
       *   name: string;
       * }
       * // Can be merged from another file:
       * interface User {
       *   email: string; // Now User requires email!
       * }
       *
       * @example Edge Case
       * // Type prevents accidental extension
       * type Animal = { type: string }
       * type Dog = Animal & { bark(): void }
       *
       * // Interface allows unintended merging
       * interface Animal { type: string }
       * interface Animal { age: number } // No error!
       */

      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      /**
       * @see https://tkdodo.eu/blog/array-types-in-type-script
       * Enforce Array<T> generic syntax over T[] array syntax
       * Preferred for consistency and explicit type declarations
       * @example Array<string> over string[]
       */
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      /**
       * Allow non-null assertions (!) for array access patterns common in utility functions
       * @example
       * // Array operations requiring index access
       * function getLastItem<T>(arr: T[]): T {
       *   return arr[arr.length - 1]! // Length check done previously
       * }
       *
       * // Matrix operations
       * function transpose<T>(matrix: T[][]): T[][] {
       *   return matrix[0]!.map((_, i) => matrix.map(row => row[i]!))
       * }
       *
       * // Buffer/Queue implementations
       * class CircularBuffer<T> {
       *   private buffer: (T | undefined)[] = []
       *   get(index: number): T {
       *     return this.buffer[index]! // Bounds checked in implementation
       *   }
       * }
       */
      '@typescript-eslint/no-non-null-assertion': 'off',
      /**
       * Allow functions that return undefined to be used in expressions
       * This is common in utility functions with optional returns
       *
       * @description
       * TypeScript considers `undefined` returns as `void`, but for utilities
       * returning `undefined` is often an intentional design choice
       *
       * @example
       * // Array utilities
       * function first<T>(arr: T[]): T | undefined {
       *   return arr[0] // Returns undefined for empty arrays
       * }
       *
       * // Optional operations
       * const value = first([]) ?? defaultValue // Using undefined in expressions
       *
       * // Chainable methods
       * class Chain<T> {
       *   value?: T
       *   setIfValid(predicate: (v: T) => boolean): Chain<T> {
       *     if (this.value && predicate(this.value)) {
       *       return this // Chain continues
       *     }
       *     return this.clear() // Intentional undefined return
       *   }
       * }
       */
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
          leadingUnderscore: 'allow',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface' },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        // These options are copied from: https://typescript-eslint.io/rules/no-unused-vars/#benefits-over-typescript
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/class-methods-use-this': 'warn',
      '@typescript-eslint/prefer-destructuring': 'warn',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        // We just want to ensure that types are defined before they are used,
        // other than that we don't need this rule...
        { functions: false, variables: false },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'warn',
        {
          // As strict as possible...
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
        },
      ],
      '@typescript-eslint/consistent-type-exports': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        { allowTypedFunctionExpressions: false },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1, 2],
          ignoreNumericLiteralTypes: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/parameter-properties': [
        'warn',
        { prefer: 'parameter-property' },
      ],
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'error',
        {
          ignoreInferredTypes: true,
          allow: [
            {
              from: 'lib',
              name: [
                // Built-ins that aren't read-only but aren't detected as such by this rule...
                'Error',
                'Function',
                'IArguments',
                'Iterable',
                'Promise',
                'ReadonlyMap',
                'RegExp',
                'ReadonlySet',
              ],
            },
          ],
        },
      ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          requireDefaultForNonUnion: true,
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-shadow': 'error',

      /**
       * ========================================================================
       * Unicorn Configuration
       * @see https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#rules
       * ========================================================================
       */
      /**
       * ESLint unicorn plugin rule configuration for array callback references
       * @rule unicorn/no-array-callback-reference
       * @setting off
       *
       * @description
       * Allows direct function references as array method callbacks:
       * - Better code transparency: array.map(parseFloat) vs array.map(x => parseFloat(x))
       * - Leverages TypeScript's type safety
       * - Optimizes performance by avoiding unnecessary wrapper functions
       *
       * @example
       * // ✅ Allowed (direct reference)
       * array.map(parseFloat)
       * array.filter(Boolean)
       *
       * // ❌ Unnecessary (extra wrapper)
       * array.map(x => parseFloat(x))
       * array.filter(x => Boolean(x))
       */
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/better-regex': 'warn',
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/custom-error-definition': 'warn',
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'unicorn/no-keyword-prefix': 'warn',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/no-useless-undefined': ['warn', { checkArguments: false }],
      'unicorn/switch-case-braces': ['error', 'avoid'],
    },
  },
  {
    files: ['*.config.js', '*.config.ts'],
    rules: {
      'jsdoc/require-example': 'off',
      'jsdoc/require-param': 'off',
      'unicorn/filename-case': 'off',
    },
  },
  {
    files: ['**/*.spec.ts*', '**/*.test.ts*', '**/*.test-d.ts*'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
      /**
       * Test Case Naming Conventions
       * Enforces lowercase test titles except for top-level describe blocks
       */
      'vitest/prefer-lowercase-title': [
        'warn',
        { ignoreTopLevelDescribe: true },
      ],
      /**
       * Test Function Selection
       * Allows flexible use of `it()` vs `test()` based on context:
       * - it(): For behavior/trait testing
       * - test(): For flow/input/edge-case testing
       */
      'vitest/consistent-test-it': 'off',
      /**
       * Test Structure
       * Avoids mandatory describe blocks that add unnecessary nesting
       */
      'vitest/require-top-level-describe': 'off',
      /**
       *
       * @description
       * Rule enforcing assertion count declarations in tests
       * Currently disabled globally but could be selectively enabled
       *
       * @options onlyXXX settings:
       * - onlyFunctional: Forces assertions count in functional tests
       * - onlyAsync: Forces assertions count in async tests
       * - onlyCallback: Forces assertions count in callback tests
       *
       * @example
       * // With onlyAsync enabled:
       * test('async test', async () => {
       *   expect.assertions(1); // Required
       *   const result = await someAsyncOperation();
       *   expect(result).toBe(true);
       * });
       *
       * @rationale
       * - Disabled globally to avoid boilerplate
       * - Consider enabling specific onlyXXX options where they add value
       * - Most valuable for async/callback tests to ensure assertions run
       */
      'vitest/prefer-expect-assertions': 'off',

      /**
       * Disabled Rules for Test Readability
       * These rules, while useful in production code, can hinder test clarity
       */
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'unicorn/no-null': 'off',
    },
    settings: { vitest: { typecheck: true } },
  },
  {
    files: ['**/*.spec.ts*', '**/*.test.ts*'],
    rules: {
      /**
       * Prefer explicit boolean checks over truthy/falsy assertions
       * @example
       * // ✅ expect(value).toBe(true)
       * // ❌ expect(value).toBeTruthy()
       */
      'vitest/prefer-to-be-truthy': 'off',
      'vitest/prefer-to-be-falsy': 'off',

      /**
       * Allow setup/teardown hooks for complex test scenarios
       * @example
       * beforeEach(() => {
       *   setupTestDatabase() // Complex setup multiple tests depend on
       * })
       */
      'vitest/no-hooks': 'off',
      /**
       * No artificial limit on expect() calls per test
       * @todo Consider enabling if clear non-arbitrary threshold emerges
       * that encourages better test organization
       */
      'vitest/max-expects': 'off',
    },
  },
  {
    /**
     * Type Test Configuration (*.test-d.ts)
     * Enables TypeScript type checking for test files
     */
    files: ['**/*.test-d.ts*'],
    settings: {
      vitest: { typecheck: true },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      /**
       * Allows @ts-expect-error usage in type tests
       * Required for testing parameter type constraints
       * @example
       * // @ts-expect-error - Should reject non-string input
       * validateString(123)
       */
      'vitest/expect-expect': 'off',

      /**
       * Allows conditionals in type guard tests
       * Necessary for testing type narrowing behavior
       * @example
       * if (isString(value)) {
       *   // Type should be narrowed to string here
       * }
       */
      'vitest/no-conditional-in-test': 'off',
    },
  }
  // ...
);
