import React from 'react'
import Input from './Child'

const Useimperativehandle = () => {
    const inputRef = React.useRef(null)


    return (
        <div>
            <Input onFocus={() => inputRef.current.focus()}
                ref={inputRef}  />
        </div>

    )
}

export default Useimperativehandle