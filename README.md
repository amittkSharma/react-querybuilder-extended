# react-querybuilder-extended
React Query Builder Extended - A react component for creating expression

## Installation

npm install react-querybuilder-extended --save

## Usage

React query builder is easily configurable and flexible expression builder component

## Simple Integration

```typescript

import React, { Component } from 'react';
import QuerybuilderExtended from 'react-querybuilder-extended';

const fields = [
 { name: 'firstName', operators: 'all', label: 'First Name', input: { type: 'text' } },
 { name: 'lastName', operators: 'all', label: 'Last Name', input: { type: 'text' } },
 { name: 'houseName', operators: 'all', label: 'House Name', input: { type: 'text' } },
];

export class App extends Component {
  handleChange(event) {
    console.log('query', event.query);
  }

  render() {
    return (
       <QuerybuilderExtended fields={fields} onChange={this.handleChange} />
    );
  }
}
```

## Query Builder Props

| Props         | Data Type           | Description  |
| ------------- |-------------| -----|
| fields      | object | Fields define basic structure of the resulting expression. It contains the property name, operator and user input. This tupple will create a rule in the expression. |
| onChange      | (expression: any) => void       | This function will bne triggered with every change in the component values |
| config | object      | Config defines basic meta structure of the component. Styles, Operators, Combinators etc. |
| buttonsText | object | Object that defines the text for the various action buttons available in the component, one can also add multi-lingual support using this object. |

## Other Use Cases


### For Existing Query Expression

```typescript
import React, { Component } from 'react';
import QuerybuilderExtended from 'react-two-way-querybuilder';;

const fields = [
  { name: 'firstName', operators: 'all', label: 'First Name', input: { type: 'text' } },
  { name: 'lastName', operators: 'all', label: 'Last Name', input: { type: 'text' } },
  { name: 'houseName', operators: 'all', label: 'House Name', input: { type: 'text' } },
];

const config = {
  query: "((firstname='Harry' AND lastName='Potter') OR lastName='Weasley')",
};

export class App extends Component {
  handleChange(event) {
    console.log('query', event.query);
  }

  render() {
    return (
       <QuerybuilderExtended config={config} fields={fields} onChange={this.handleChange} />
    );
  }
}
```

### For Different Inputs

```typescript
import React, { Component } from 'react';
import QuerybuilderExtended from 'react-two-way-querybuilder';;

const customFields = [
  { name: 'firstName', operators: 'all', label: 'First Name', input: { type: 'text' } },
  { name: 'LastName', operators: 'all', label: 'Last Name', input: { type: 'text' } },,
  { name: 'house', operators: 'all', label: 'House',
    input: {
    type: 'select',
    options: [
      { value: 'HouseA', name: 'HouseA' },
      { value: 'HouseB', name: 'HouseB' },
    ] } },
];

export class App extends Component {
  handleChange(event) {
    console.log('query', event.query);
  }

  render() {
    return (
      <QuerybuilderExtended config={config} fields={customFields} onChange={this.handleChange} />
    );
  }
}
```

