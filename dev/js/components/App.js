import React, { Component } from 'react';
import { fetchLoginDetails, persistLogindetails } from '../actions';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import  $ from 'jquery';
import {Home} from './home';

class AppComp extends Component {
  constructor(props){
    super(props)
    this.state ={
        loginSuccess: false,
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.fetchUserDetails = this.fetchUserDetails.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }
  onFormSubmit(){
    if(this.refs.appPassword.value === "" || this.refs.appUsername.value === ""){
      alert("Please Enter Username and password")
    }
    else {
      const userDetails ={
        username: this.refs.appUsername.value,
        password: this.refs.appPassword.value,
      }
      this.fetchUserDetails(userDetails)
    }
  }
  fetchUserDetails(userDetails){
    let ajaxResponse  
    $.ajax({
        url:"https://swapi.co/api/people/?search="+userDetails.username,
        success : function (response){
            ajaxResponse = response.results
            
        },
        error: function (response){
            ajaxResponse = response
        },
    })
    .then(()=>{
        this.props.fetchLoginDetails(ajaxResponse)
        if(ajaxResponse[0].birth_year === this.refs.appPassword.value ){
            this.props.persistLogindetails(ajaxResponse[0])
            this.setState({loginSuccess: true})
        }
        else {
            alert("Password incorrect")
        }
    })
  }
  logoutUser(){
    this.props.persistLogindetails({})
    this.setState({loginSuccess: false})
    this.props.fetchLoginDetails({})
  }
  render() {
    return (
      <div>
          {this.state.loginSuccess ? '': <div>
        <form>
        <input type='text' placeholder='Username' ref='appUsername'/><br/>
        <input type='password' placeholder='Password' ref='appPassword'/>
        </form>
        <button  onClick={this.onFormSubmit}>Login</button>
        </div>}
        {this.state.loginSuccess ? <div>
             <button onClick={this.logoutUser}>Logout</button>
             <Home />
             </div>: null}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    personalDetails : state.activeUsers,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchLoginDetails: userDetails => {
      dispatch(fetchLoginDetails(userDetails))
    },
    persistLogindetails : loginDetails => {
        dispatch(persistLogindetails(loginDetails))
    }
  }
}

  const App = connect(mapStateToProps,  mapDispatchToProps
)(AppComp)

export default App;
