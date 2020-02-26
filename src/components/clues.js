import React, {Component} from 'react'

export default class Clues extends Component {

  renderClues = () => {

    let clues =  <div>
      <div className="clues">
        <h3>Across </h3>
        {this.props.clues.across.map((clue, index) => {
           return <p key={index}> {clue} </p>
        })}
      </div>

      <div className="clues">
        <h3>Down </h3>
        {this.props.clues.down.map((clue, index) => {
           return <p key={index}> {clue} </p>
        })}
      </div>
    </div>

    return clues
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
