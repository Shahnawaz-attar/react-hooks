import React, {useState,useCallback } from 'react'
import Child from './Child'


const UseCallback = () => {

  console.log('UseCallback rendered')
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedSetCountOne = useCallback(() => {
    setCountOne(countOne + 1)
  }, [countOne])

  const memoizedSetCountTwo = useCallback(() => {
    setCountTwo(countTwo + 1)
  }, [countTwo])

    return (
        <div>
           {countOne} {countTwo}
       
            <Child name="Child One" handleClick={memoizedSetCountOne} />
            <Child name="Child Two" handleClick={memoizedSetCountTwo} />
        </div>
    )
}

export default UseCallback