// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generator = () => {
    this.setState({count: Math.ceil(Math.random(1, 10) * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg1">
        <div className="bg2">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="button" type="button" onClick={this.generator}>
              Generate
            </button>
          </div>
          <p className="paragraph2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
