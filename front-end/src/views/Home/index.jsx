import React, { Component } from 'react'
import styled from 'styled-components'
import Particle from './particle/index.jsx'
import Button from '@material-ui/core/Button'

class Home extends Component {
  state = {
    showParticle: true
  }
  setOver = () => {
    this.setState({ showParticle: false })
  }
  render() {
    const { showParticle } = this.state
    return (
      <Layout>
        {showParticle && <Particle setOver={this.setOver} />}
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
      </Layout>
    )
  }
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`

export default Home
