import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import toml from 'toml'
import Cothoreasy from 'cothoreasy'

class ConodeList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coth: {},
      serverDescription: '',
      servers: []
    }
  }

  async componentDidMount () {
    const res = await fetch('https://raw.githubusercontent.com/dedis/cothority/master/dedis-cothority.toml')
    const file = await res.text()
    const servers = toml.parse(file).servers
    this.setState({ servers })
    const coth = new Cothoreasy()
    const status = await coth.status()
    const serverDescription = await status.serveridentity.description
    this.setState({ coth, serverDescription })
  }

  render () {
    return (
      <>
        <h2 className='title is-3'>List of official <span className='has-text-primary'>conodes</span>:</h2>
        <div style={{ overflow: 'auto', width: '100%' }}>
          <table className='table is-fullwidth is-hoverable'>
            <tbody>
              {this.state.servers.map(server => (
                <tr key={server.Public}><td>{server.Description}</td><td>{server.Address}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        {this.state.serverDescription
          ? <h2 className='title is-3'>Connected to <span className='has-text-primary'>{this.state.serverDescription}</span></h2>
          : <h2 className='title is-3'>Connecting to a <span className='has-text-primary'>conode</span>...</h2>
        }
      </>
    )
  }
}

export default ConodeList
