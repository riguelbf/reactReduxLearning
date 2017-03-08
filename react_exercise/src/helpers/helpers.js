import React from 'react'

const childrenWithProps = (props) => {
    return React.Children.map(props.children, child => React.cloneElement(child, {...props }))
}

export { childrenWithProps }