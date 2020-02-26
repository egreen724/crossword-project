import React, {Component} from 'react'

export default class Clues extends Component {

  state = {
    across: ["6. City that is home to the oldest university in Europe", "7. Holiday preceding the season of Lent", "8. Highest peak in North America", "9. 2009 Super Bowl victors", "10. Book by Jane Austen featuring Frederick and Anne"],
    down: ["1. National park that is home to El Capitan and Half Dome", "2. Programming language developed by Yukihiro Matsumoto 'to make programmers happy'", "3. US city originally called Terminus", "Henri who developed the artistic style of fauvism", "5. Movie with the last line 'This is the beginning of a beautiful friendship'"]
  }

  renderClues = () => {

    return <div>
      <div className="across">
        <h3>Across </h3>
        {this.state.across.forEach(clue => {
          return <p> {clue} </p>
        })}
      </div>

      <div className="down">
        <h3>Down </h3>
        {this.state.down.forEach(clue => {
          return <p> {clue} </p>
        })}
      </div>
    </div>
  }

  render() {
    return (
      <div>
        <h2>Clues</h2>
        {this.renderClues()}
      </div>
    )
  }

}