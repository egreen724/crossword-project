import React, { Component } from 'react'

class Gameboard extends Component {

  state = {
    board:
      [	[0,	0, 0, 0, 0, 0, 0, 0, 0, '1', 0, 0, 0, 0, 0, 0, 0, 0],
        ['2',	0, '3', 0, 0, 0, 0, 0, 0, '1', 0, 0, 0, '4', 0, 0, 0, 0],
        ['2',	0, '3', 0, 0, 0, '5', 0, 0, '1', 0, 0, 0, '4', 0, 0, 0, 0],
        ['2,6', '6', '3,6', '6', '6', '6', '5,6', 0, 0, '1', 0, 0, 0, '4', 0, 0, 0, 0],
        ['2',	0, '3', 0, 0, 0, '5', 0, 0, '1', 0, 0, 0, '4', 0, 0, 0, 0],
        [0,	0, '3', 0, 0, '7', '5,7', '7', '7', '1,7', '7', '7', '7', '4,7', 0, 0, 0, 0],
        [0,	0, '3', 0, 0, 0, '5', 0, 0, '1', 0, 0, 0, '4', 0, 0, 0, 0],
        [0,	0, '3', 0, 0, 0, '5', 0, 0, '1', 0, 0, '8', '4,8', '8', '8', '8', '8'],
        [0,	0, 0, 0, 0, 0, '5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0,	0, 0, '9', '9', '9', '5,9', '9', '9', 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0,	0, 0, 0, 0, 0, '5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0,	'10', '10', '10', '10', '10', '5,10', '10', '10', '10', '10', 0, 0, 0, 0, 0, 0, 0]
      ]
  }

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
