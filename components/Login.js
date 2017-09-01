import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
	  <div className="container">
		<div className="row">
		  
		  <div className="col"></div>
		  
		  <div className="col-5">
			
			<br /><br /><br />
			<div className="card">
			  <div className="card-block">
				<h4 className="card-title">Login</h4>
				
				<div className="form-group">				
				  <label>Usuario:</label>
				  <input type="text" className="form-control" />
				</div>
				<div className="form-group">
				  <label>Password:</label>
				  <input type="password" className="form-control" />
				</div>
				
				<button className="btn btn-primary btn-block"> Lgin</button>
				<br />
				
				<a href="#" className="card-link">Registrarse</a>
				<a href="#" className="card-link">Olvido su Password</a>
			  </div>
			</div>
			
		  </div>
			
		  <div className="col"></div>
		 </div>
	  </div>
    )
  }
}
export default Login