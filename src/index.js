import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

const Invoice = lazy(() => import('./Invoice'))

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      invoiceId: 0,
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, -1)}>-</button>
        {this.state.invoiceId}
        <button onClick={this.handleClick.bind(this, 1)}>+</button>
        <Suspense maxDuration={1000} fallback={<div>Loading...</div>}>
          <Invoice invoiceId={this.state.invoiceId} ms={100} />
        </Suspense>
      </div>
    )
  }

  handleClick(option) {
    this.setState({
      invoiceId: this.state.invoiceId + option
    })
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
