import React, { Component } from 'react'

class Square extends Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    const userInput = e.target.value;

    this.setState({
      input: userInput,

    })

    this.props.setUserAnswer(userInput)
    console.log(this.state.input)
    // add logic to move to next input and a callback function to pass answer up to parent
  }

  render() {
    return(
      <>

        <td key={this.props.label} className="input">
          <label> {this.props.label}</label>
          <input
            onChange={this.handleChange}
            value={this.state.input}
            type='text'
            maxLength= "1">
          </input>
        </td>
      </>
    )
  }

}

export default Square;
