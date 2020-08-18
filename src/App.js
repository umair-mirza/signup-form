import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = 
    {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
      }
    }
  }

  submit = (e) => {
    
    e.preventDefault();
    fetch('https://api.raisely.com/v3/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        if(!data.errors) {
          alert("Congratulations! User has been created")
        }
        else {
          alert("Email already registered. Please try another one!")
        }
      })
  }

  handleChange = (e) => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
  }

  render() {
  return (
    <div>
      <div className="signup-form">
          <form onSubmit={this.submit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
              <div className="form-group">
            <div className="row">
              <div className="col"><input type="text" 
              className="form-control" 
              name="firstName" 
              placeholder="First Name" 
              onChange={this.handleChange}
              value={this.state.data.firstName} 
              required="required"
               /></div>
              <div className="col"><input type="text" 
              className="form-control" 
              name="lastName" 
              placeholder="Last Name" 
              onChange={this.handleChange}
              value={this.state.data.lastName} 
              required="required"
               /></div>
            </div>        	
              </div>
              <div className="form-group">
                <input type="email" 
                className="form-control" 
                name="email" 
                placeholder="Email" 
                onChange={this.handleChange}
                value={this.state.data.email} 
                required="required" 
                />
              </div>
          <div className="form-group">
                  <input type="password" 
                  className="form-control" 
                  name="password" 
                  placeholder="Password" 
                  onChange={this.handleChange}
                  value={this.state.data.password} 
                  required="required" 
                  />
              </div>       
          <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
              </div>
          </form>
      </div>
      </div>
  );
  }
}

export default App;
