import React, { useLayoutEffect, useState } from 'react'
import { useEffect } from 'react';

const UseLayoutEffect = () => {
    const [value, setValue] = useState('GFG');



    useEffect(() => {
        console.log('useEffect');
    }, [value]);
    useEffect(() => {
        console.log('useLayoutEffect');
        document.title = value;
    }, [value]);
  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect