// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onButtonClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="des">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onButtonClicked}>
          click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
