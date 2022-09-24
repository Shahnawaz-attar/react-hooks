import React, { useRef, useImperativeHandle, forwardRef } from 'react';
  
function Input(props, ref) {
  const btn = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
        btn.current.focus();
        console.log('focus');
    },
  }));
  return <input ref={btn} {...props} placeholder="type here" />;
}
  
export default forwardRef(Input);



    