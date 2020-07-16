import React from 'react'

import { useGeoField } from 'react-geokbd'

const App = () => {
  const [fieldValue, setFieldValue] = useGeoField()

  return (
    <div
      style={{
        padding: 10
      }}
    >
      <p>ენის შესაცვლელად დააჭირეთ ' ` '-ს</p>
      <input
        type="text"
        value={fieldValue}
        onChange={setFieldValue}
        placeholder='ფლეისჰოლდერი'
        style={{
          padding: 5
        }}
      />
    </div>
  )
}

export default App
