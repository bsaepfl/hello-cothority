import { Component } from 'react'
import identity, { net } from '@dedis/cothority'
import fetch from 'isomorphic-unfetch'
import 'babel-polyfill'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { serverDescription: '' }
  }

  static async getInitialProps () {
    const serversRes = await fetch('https://skipchain.dedis.ch/index.js')
    const cothorityRes = await fetch('https://raw.githubusercontent.com/dedis/cothority/master/dedis-cothority.toml')
    const servers = (await serversRes.json()).Blocks[0].Servers
    const cothority = await cothorityRes.text()
    return { servers, cothority }
  }

  async componentDidMount () {
    const socket = new net.RosterSocket(identity.Roster.fromTOML(this.props.cothority), 'Status')
    const res = await socket.send('status.Request', 'Response', {})
    const serverDescription = await res.serveridentity.description
    this.setState({ serverDescription })
  }

  render () {
    return (
      <div>
        <h1>Hello, Cothority</h1>
        <h3>List of official conodes:</h3>
        <ul>
          {this.props.servers.map(server => (
            <li key={server}>{server}</li>
          ))}
        </ul>
        <h3>Connected to {this.state.serverDescription}</h3>
      </div>
    )
  }
}
