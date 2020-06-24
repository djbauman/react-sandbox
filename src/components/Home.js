import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    console.log("Executing onMakeOlder function.");
    this.age += 1;
  }

  render() {
    // console.log(this.props)
    console.log(this.age)
    return(
      <div>
        <p>In a new Component!</p>
        <p>Your name is {this.props.name}, your age is {this.age}.</p>
        <hr/>
        {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button> */}
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};