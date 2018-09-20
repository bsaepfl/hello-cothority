import { Component } from 'react'
import { net } from '@dedis/cothority'
import fetch from 'isomorphic-unfetch'

export default class Index extends Component {
  static async getInitialProps() {
    const res = await fetch('https://skipchain.dedis.ch/index.js')
    const json = await res.json()
    return { servers: json.Blocks[0].Servers }
  }

  render() {
    return (
      <div>
        <h3>Got a list of servers:</h3>
        <ul>
          {this.props.servers.map(server => (
            <li key={server}>{server}</li>
          ))}
        </ul>
      </div>
    )
  }
}
