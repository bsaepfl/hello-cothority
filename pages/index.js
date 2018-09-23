import { Component } from 'react'
import identity, { net } from '@louismerlin/cothority'
import fetch from 'isomorphic-unfetch'
import toml from 'toml'
import 'babel-polyfill'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { serverDescription: '' }
  }

  static async getInitialProps () {
    const res = await fetch('https://raw.githubusercontent.com/dedis/cothority/master/dedis-cothority.toml')
    const file = await res.text()
    console.log(file)
    const servers = toml.parse(file).servers
    const cothority = file
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
      <div className="container">
        <h1>Hello, Cothority</h1>
        <h2>List of official conodes:</h2>
        <ul>
          {this.props.servers.map(server => (
            <li key={server.Public}><strong>{server.Description}</strong> [{server.Address}]</li>
          ))}
        </ul>
        {this.state.serverDescription ?
          <h2>Connected to {this.state.serverDescription}</h2> :
          <h2>Connecting to a conode...</h2>
        }
        <style jsx>{`
          .container {
            font-family: sans-serif;
            max-width: 640px;
            margin: auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
