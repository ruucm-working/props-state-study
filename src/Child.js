import React, { Component } from 'react';
import './Child.css';

class Child extends Component {
  render() {
    return (
      <div className="Child">
        <p>미아분실 카드</p>
        <p>이름 : {this.props.name}</p>
        <p>주소 : {this.props.address}</p>
      </div>
    );
  }
}

export default Child;
