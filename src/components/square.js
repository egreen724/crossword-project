import React, { Component } from 'react'

class Square extends Component {

  state = {
    input: '',
    answer: ''
  }

  handleChange = (e) => {
    const userInput = e.target.value;

    this.setState({
      input: userInput,
      answer: this.state.answer.concat(userInput)
    })

    console.log(this.state.answer)
  }


  render() {
    return(
      <>
        <td key={this.props.label} className="input">
          <input onChange={this.handleChange}
                value={this.state.input}
                placeholder={this.props.label}
                type='text'
                maxlength= "1">
          </input>
        </td>
      </>
    )
  }

}

export default Square;
