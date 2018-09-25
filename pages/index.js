import { Component } from 'react'
import identity, { net } from '@dedis/cothority'
import fetch from 'isomorphic-unfetch'
import toml from 'toml'
import 'babel-polyfill'
import 'blulma/blulma.css'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { serverDescription: '' }
  }

  static async getInitialProps () {
    const res = await fetch('https://raw.githubusercontent.com/dedis/cothority/master/dedis-cothority.toml')
    const file = await res.text()
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
      <div className='container'>
        <h1 className='title is-1'>Hello, <span className='has-text-link'>Cothority</span></h1>
        <h2 className='title is-3'>List of official <span className='has-text-link'>conodes</span>:</h2>
        <table className='table is-fullwidth is-hoverable'>
          <tbody>
            {this.props.servers.map(server => (
              <tr key={server.Public}><td>{server.Description}</td><td>{server.Address}</td></tr>
            ))}
          </tbody>
        </table>
        <br />
        {this.state.serverDescription
          ? <h2 className='title is-3'>Connected to <span className='has-text-link'>{this.state.serverDescription}</span></h2>
          : <h2 className='title is-3'>Connecting to a <span className='has-text-link'>conode</span>...</h2>
        }
        <style jsx>{`
          .container {
            max-width: 800px;
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
