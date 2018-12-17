import React, { Component } from 'react'
import styled from 'styled-components'
import Particle from './particle/index.jsx'

class Home extends Component {
  render() {
    return (
      <Layout>
        <Particle />
      </Layout>
    )
  }
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`

export default Home
