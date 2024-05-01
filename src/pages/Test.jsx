import React, { Component } from 'react'
import Layout from '../components/Layout'

export class Test extends Component {

    // const [count, setCount] = useState()
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <Layout title='Test'>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Klik</button>
        <h2>Hallo guys</h2>
      </Layout>
    )
  }
}

export default Test
