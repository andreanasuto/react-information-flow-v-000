import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dadColor: props.color,
      childColor: getReducedColor(dadColor),
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.state.dadColor}>
        <Tier3 color={this.state.childColor} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
