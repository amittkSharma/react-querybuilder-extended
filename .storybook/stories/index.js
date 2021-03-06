import { action, storiesOf } from '@kadira/storybook';
import React from 'react';
import QuerybuilderExtended from '../../src/QuerybuilderExtended';
import './index.css';

const config = {
  query: "((firstName >= 'Jack' AND lastName<'London') OR lastName<>'Smith')",
};

const dropdownconfig = {
  query: "(lastName = 'London' AND age in '30')"
}

const defaultFields = [
  { name: 'firstName', operators: 'all', label: 'First Name', input: { type: 'text' } },
  { name: 'lastName', operators: 'all', label: 'Last Name', input: { type: 'text' } },
  { name: 'age', operators: 'all', label: 'Age', input: { type: 'text' } },
  { name: 'birthDate', operators: 'all', label: 'Birth date', input: { type: 'text' } },
];

const validationFields = [
  { name: 'firstName', operators: 'all', label: 'First Name', input:
  { type: 'text', errorText: 'Only letters allowed', pattern: new RegExp("[a-z]+", "gi") } },
  { name: 'lastName', operators: 'all', label: 'Last Name', input: {
     type: 'text', errorText: 'Only letters allowed', pattern: new RegExp("[a-z]+", "gi") } },
  { name: 'age', operators: 'all', label: 'Age', input: {
     type: 'text', errorText: 'Only numbers allowed', pattern: new RegExp('[0-9]+', 'gi') } },
  { name: 'birthDate', operators: 'all', label: 'Birth date', input: {
    type: 'text', errorText: 'Only numbers allowed', pattern: new RegExp('[0-9]+', 'gi') }
   },
];

const changedFields = [
  { name: 'firstName', operators: 'all', label: 'First Name', input: { type: 'text' } },
  { name: 'lastName', operators: 'all', label: 'Last Name', input: {
    type: 'select',
    options: [
      { value: 'Smith', name: 'Smith' },
      { value: 'London', name: 'London' },
    ] } },
  { name: 'age', operators: 'all', label: 'Age',
    input: {
      type: 'select',
      options: [
        { value: '28', name: 'twenty eight' },
        { value: '30', name: 'thirty' },
      ] } },
  { name: 'birthDate', operators: 'all', label: 'Birth date', input: { type: 'text' } },
];

const styles = {
  primaryBtn: 'customPrimaryBtn',
  deleteBtn: 'customDeleteBtn',
  rule: 'rule',
  condition: 'condition',
  select: 'querySelect',
  input: 'queryInput',
  txtArea: 'queryText',
};

const changedStyles = {
  styles,
};

storiesOf('Query builder', module)
  .add('default view', () => (
    <QuerybuilderExtended fields={defaultFields} onChange={action('data changed')} />
  ))
  .add('existing query', () => (
    <QuerybuilderExtended config={config} fields={defaultFields} onChange={action('data changed')} />
  ))
  .add('changed input types', () => (
    <QuerybuilderExtended fields={changedFields} onChange={action('data changed')} />
  ))
  .add('custom styles', () => (
    <QuerybuilderExtended config={changedStyles} fields={defaultFields} onChange={action('data changed')} />
  ))
  .add('validation', () => (
    <QuerybuilderExtended fields={validationFields} onChange={action('data changed')} />
  ))
  .add('existing query and changed input types', () => (
    <QuerybuilderExtended fields={changedFields} config={dropdownconfig} onChange={action('data changed')} />
  ));
