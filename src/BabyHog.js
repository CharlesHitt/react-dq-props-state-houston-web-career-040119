import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props),
    this.state={
      id: props.idTag,
      name: props.name,
      hobby: props.hobby,
      weight: 150
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  babySRC = () => {
    if(this.props.eyeColor === "blue"){return BlueBaby}
    else if (this.props.eyeColor === "sun"){return SunBaby}
    else if (this.props.eyeColor === "glowing"){return GlowingBaby}
    else {return normalBaby}
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.state.name}</h1>
        <h3>Weight:{this.state.weight}</h3>
        <h3>Hobby:{this.state.hobby}</h3>
        <h4>Eye Color:{this.props.eyeColor}</h4>
          
        <Button name="+" onClick={((e)=>this.changeWeight(e))}>
          Increase Weight
        </Button>
        <Button name="-" onClick={((e)=>this.changeWeight(e))}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.babySRC()} style={{height: `${this.state.weight}px`}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
