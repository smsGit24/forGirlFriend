import axios from 'axios'
import * as React from 'react'
import './App.css'

class App extends React.Component {
  public state = {
    passWord: '',
    userName: ''
  }
  public handleChange = (value: string, type: string) => {
    this.setState({
      [type]: value
    })
  }
  public login = () => {
    const { passWord, userName } = this.state
    axios.post('http://localhost:8888/login', {
      passWord,
      userName
    })
  }
  public render() {
    const { passWord, userName } = this.state
    return (
      <div className="App">
        <input
          type="text"
          value={userName}
          onChange={e => this.handleChange(e.target.value, 'userName')}
        />
        <input
          type="text"
          value={passWord}
          onChange={e => this.handleChange(e.target.value, 'passWord')}
        />
        <button onClick={this.login}>登陆</button>
      </div>
    )
  }
}

export default App
