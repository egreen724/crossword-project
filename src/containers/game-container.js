import React, { Component } from 'react'
import Gameboard from '../components/gameboard.js'
import Clues from '../components/clues.js'

class GameContainer extends Component {

  state= {
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
      ],
    clues: {
        across: ["6. City that is home to the oldest university in Europe", "7. Holiday preceding the season of Lent", "8. Highest peak in North America", "9. 2009 Super Bowl victors", "10. Book by Jane Austen featuring Frederick and Anne"],
        down: ["1. National park that is home to El Capitan and Half Dome", "2. Programming language developed by Yukihiro Matsumoto 'to make programmers happy'", "3. US city originally called Terminus", "4. Henri who developed the artistic style of fauvism", "5. Movie with the last line 'This is the beginning of a beautiful friendship'"]
    },

    answers:
      ['yosemite', 'ruby', 'Atlanta', 'Matisse', 'Casablanca', 'Bologna', 'Mardigras', 'Denali', 'Saints', 'Persuasion']

  }

  render() {
    return (
      <div>
        <Clues clues={this.state.clues}/>
        <Gameboard board={this.state.board}/>
      </div>
    )
  }

}

export default GameContainer
