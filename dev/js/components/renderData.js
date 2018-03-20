import React, { Component } from 'react';

export class RenderData extends Component {
    render(){
       var data =this.props.data
        return (
            <div>
                <h2>Film Details: </h2>
          <table border='2'>
            <tr>
              <th>Name:</th>
              <td>{data.title}</td>
            </tr>
            <tr>
              <th>Director:</th>
              <td>{data.director}</td>
            </tr>
            <tr>
              <th>Producer:</th>
              <td>{data.producer}</td>
            </tr>
            <tr>
              <th>Release Data:</th>
              <td>{data.release_date}</td>
            </tr>
            <tr>
              <th>Episode Number:</th>
              <td>{data.episode_id}</td>
            </tr>
            <tr>
              <th>Url:</th>
              <td>{data.url}</td>
            </tr>
            <tr>
              <th>Edited:</th>
              <td>{data.edited}</td>
            </tr>
            </table>
        </div>
        )
    }
}