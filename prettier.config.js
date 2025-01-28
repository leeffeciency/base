/**
 * @file Prettier Configuration
 * @description This configuration file sets up code formatting rules for a modern JavaScript/TypeScript project.
 *              It includes settings for general code style, JSX formatting, and import organization.
 */
/** @type {import('prettier').Config} */
export default {
  /**
   * @example
   * 'avoid': x => x
   * 'always': (x) => x
   */
  arrowParens: 'avoid',
  /**
   * @example
   * // false:
   * <button
   *   onClick={handleClick}
   * >
   * // true:
   * <button
   *   onClick={handleClick}>
   *
   */
  bracketSameLine: false,
  /**
   * @property {boolean} bracketSpacing - Controls spacing in object literal braces
   * @example
   * // true: { foo: bar }
   * // false: {foo: bar}
   */
  bracketSpacing: true,
  /**
   * @description 'lf' is recommended for cross-platform compatibility
   */
  endOfLine: 'lf',
  /**
   * @property {boolean} jsxSingleQuote - Controls quote style in JSX attributes
   * @example
   * false: <button className="btn">
   * true: <button className='btn'>
   */
  jsxSingleQuote: false,
  printWidth: 80,
  /**
   * @property {string} proseWrap - Controls text wrapping in Markdown files
   * @description 'preserve' maintains the original text wrapping
   * @values 'always' | 'never' | 'preserve'
   */
  proseWrap: 'preserve',
  /**
   * @property {string} quoteProps - Controls object property name quotes
   * @example
   * // 'as-needed':
   * {
   *   regular: "value",
   *   "special-key": "value"
   * }
   */
  quoteProps: 'as-needed',
  /**
   * @property {boolean} semi - Controls semicolon usage
   * @description When true, adds semicolons consistently to prevent ASI issues
   */
  semi: true,
  /**
   * @property {boolean} singleQuote - Controls string quote style
   * @example
   * // true: 'string'
   * // false: "string"
   */
  singleQuote: true,
  /**
   * @property {number} tabWidth - Indentation size
   */
  tabWidth: 2,
  /**
   * @property {string} trailingComma - Controls trailing commas in multi-line structures
   * @description 'es5' adds trailing commas except for function parameters
   * @values 'none' | 'es5' | 'all'
   */
  trailingComma: 'es5',
  /**
   * @property {Array} plugins - Required plugins for enhanced formatting
   */
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  /**
   * @property {Array<string>} importOrder - Defines the order of import statements
   * @description Organizes imports in the following order:
   * 1. Testing libraries (vitest)
   * 2. Third-party modules
   * 3. Internal modules with @ alias
   * 4. Local imports from current directory
   * 5. Local imports from parent directories
   */
  importOrder: [
    '^vitest',
    '<THIRD_PARTY_MODULES>',
    '^@(.*)$',
    '^[.]/',
    '^[.]{2,}/',
  ],
  /**
   * @property {boolean} importOrderSeparation - Controls spacing between import groups
   * @example
   * import { test } from 'vitest';
   *
   * import React from 'react';
   *
   * import { Button } from '@/components';
   */
  importOrderSeparation: true,
  /**
   * @property {boolean} importOrderSortSpecifiers - Controls sorting of named imports
   * @example
   * Before: import { useState, useEffect, useCallback } from 'react';
   * After:  import { useCallback, useEffect, useState } from 'react';
   */
  importOrderSortSpecifiers: true,

  /**
   * @property {boolean} importOrderCaseInsensitive - Controls case sensitivity in import sorting
   * @description Useful when mixing PascalCase and camelCase naming conventions
   */
  importOrderCaseInsensitive: true,
};
