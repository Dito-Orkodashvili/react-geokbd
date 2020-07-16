# react-geokbd

> React hook for using Georgian keyboard in form fields

[![NPM](https://img.shields.io/npm/v/react-geokbd.svg)](https://www.npmjs.com/package/react-geokbd) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-geokbd
```

## Usage

```jsx
import React from 'react'
import { useGeoField } from 'react-geokbd'

const App = () => {
  const [fieldValue, setFieldValue] = useGeoField()

  return (
    <input
      type='text'
      value={fieldValue}
      onChange={setFieldValue}
    />
  )
}
```

## License

MIT © [Dito-Orkodashvili](https://github.com/Dito-Orkodashvili)
