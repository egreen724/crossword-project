import React, { Component } from 'react'

class Gameboard extends Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    const userInput = e.target.value;

    this.setState({
      input: userInput
    })
  }

  renderBoard = () => {

    let boardRows = this.props.board.map((row, index) => {
        let boardCells = row.map((cell, index) => {
          if (cell === 0) {
            return <td key={index} className="empty"> </td>
          } else {
            let label = null
            let label2 = null
            if (cell.includes(',')) {
               label = parseInt(cell.split(',')[0])
               label2 = parseInt(cell.split(',')[1])
            } else {
               label = parseInt(cell)
            }

            return <td key={label} className="input">
              <input onChange={this.handleChange}
                    value={this.state.input}
                    placeholder={label}
                    type='text'
                    maxlength= "1">
              </input>
            </td>
          }
        })
         return <tr key={index}>{boardCells}</tr>
      })
      return boardRows
    }



  render() {
    return (
      <div>
        <table id="board" >
          <tbody>
            {this.renderBoard()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Gameboard;
