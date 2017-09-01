'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'

class MyComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
		<Login />
      </div>
    )
  }
}

// Import app styles
//require('./scss/style.scss');
ReactDOM.render(<MyComponent />, document.getElementById('app'))
export default MyComponent