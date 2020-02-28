import React, { Component } from 'react'
import Square from './square.js'

class Gameboard extends Component {



  renderBoard = () => {

    let boardRows = this.props.board.map((row, index) => {
        let boardCells = row.map((cell, index) => {
          if (cell === 0) {
            return <td key={index} className="empty"> </td>
          } else {

            let label = null

            if (cell.includes(',')) {
               label = parseInt(cell.split(',')[0])
            } else {
               label = parseInt(cell)
            }
            return <Square setUserAnswer={this.props.setUserAnswer} key={index} label={label} />
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
