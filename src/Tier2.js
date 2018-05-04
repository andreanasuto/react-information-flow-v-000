import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dadColor: props.color,
      childColor: getReducedColor(this.state.dadColor),
    }
  }

  handleChildClick = () => {
    this.setState({
      childColor: getRandomColor()
    })
  }

  handleClick = () => {
    this.setState({
      dadColor: getRandomColor(),
      childColor: getReducedColor(this.state.dadColor)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.state.dadColor}} onClick={this.handleClick}>
        <Tier3 color={this.state.childColor} onClick={this.handleChildClick} />
        <Tier3 color={this.state.childColor} onClick={this.handleChildClick} />
      </div>
    )
  }
}
