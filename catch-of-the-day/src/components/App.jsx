import React from 'react'
import Fish from './Fish.jsx'
import Header from './Header.jsx'
import Inventory from './Inventory.jsx'
import Order from './Order.jsx'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor() {
    super()

    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    // getinitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update our state
    const fishes = { ...this.state.fishes }
    // add in our new fish
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    // set state
    this.setState({ fishes })
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    // take a copy of our state
    const order = { ...this.state.order }
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1
    // update state
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App