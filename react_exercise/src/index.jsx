import React from 'react'
import ReactDOM from 'react-dom'
import ComponentClass from './component'

ReactDOM.render(
    <ComponentClass initialValue={10} label="Component"/>
    , document.getElementById('app'));