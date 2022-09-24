import React from 'react'
import { memo } from 'react'

const Child = memo(({name,handleClick}) => {
  console.log(`Rendering ${name}`)
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
})

export default Child