import React, { useEffect } from 'react'

const Useeffect = () => {
    const [count , setCount] = React.useState(0)

    // all react hooks examples
  
    // 1 - useEffect with no dependencies
      // this will run when the component mounts and anytime the stateful data changes
    useEffect(() => {
      console.log('useEffect with no dependencies')
    })
  
    // 2 - useEffect with empty dependencies
      // it will run only once when the component mounts
    useEffect(() => {
      console.log('useEffect with empty dependencies')
    }, [])
  
    // 3 - useEffect with dependencies
      // it will run only when the dependencies change
    useEffect(() => {
      console.log('useEffect with dependencies')
    }, [count])
  
    // 4 - useEffect with return
      // it will run when the component unmounts
    useEffect(() => {
        console.log('useEffect with return')
        return () => {
            console.log('useEffect with return - unmount')
        }
        }, [])
    
    // 5 - useEffect with async function
      // it will run when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect with async function')
        }
        fetchData()
    }, [])
    
    // 6 - useEffect with async function and await
      // it will run when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json()
            console.log('useEffect with async function and await', data)
        }
        fetchData()
    }, [])
  
    return (
      <div>
        <h1>React Hooks</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
  }

export default Useeffect