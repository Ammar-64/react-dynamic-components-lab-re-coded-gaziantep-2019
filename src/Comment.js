import React, { Component } from 'react';

export default class Comments extends Component {
  render(){
    return (
      <div>
      {this.props.commentText}
      </div>
    )
  }
}
