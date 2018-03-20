import React, { Component } from 'react';
import  $ from 'jquery';
import {  persistFilmSearchResults } from '../actions';
import { connect } from 'react-redux'
import {RenderData} from './renderData'

 class HomeComp extends Component {
    constructor(props){
      super(props)
      this.state = {
        searchResults:[],
        data:'',
      }
      this.inputChangeHandler = this.inputChangeHandler.bind(this)
      this.showData = this.showData.bind(this)

    }
    inputChangeHandler(){
        let ajaxResponse
        $.ajax({
            url:"https://swapi.co/api/films/?search="+this.refs.searchBox.value,
            success : function (response){
                ajaxResponse = response.results
            },
            error: function (response){
                ajaxResponse = response
            },
        })
        .then(()=>{
          let response = ajaxResponse.results ? ajaxResponse.results : ajaxResponse
          this.setState({searchResults: response})
          this.props.persistFilmSearchResults(response)
        })
        
    }
    showData(data){
      this.setState({data: data})
    }

    render() {
      
      return (
        <div>
            Find Movie: <input type='text' ref='searchBox' onChange={this.inputChangeHandler} placeholder='Search a movie here ...'/>
            <br/>
            <table border="2">
            <tbody>
            <tr><th>List of Films(click on the name to view more details):</th></tr>
            {this.props.filmSearchResults.map(data => {
              return <tr><td><span onClick={dt => this.showData(data)}>{data.title}</span></td></tr>
            })}
            </tbody>
             </table> 
             
            {this.state.data ? <RenderData data={this.state.data}/> :''}
             
        </div>
      );
    }
  }

  
const mapStateToProps = state => {
    return {
      personalDetails : state.activeUser,
      filmSearchResults: state.activeUser.filmResults,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        persistFilmSearchResults: searchResults => {
        dispatch(persistFilmSearchResults(searchResults))
      }
    }
  }
  
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp)
  

  