import React, { Component } from 'react'

class Gameboard extends Component {

  renderBoard = () => {

    let boardRows = this.state.board.map((row, index) => {
        let boardCells = row.map((cell, index) => {
          if (cell === 0) {
            return <td key={index} className="empty"> </td>
          } else {
            return <td key={index} className="input"> </td>
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
