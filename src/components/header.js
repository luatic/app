import React, {Component} from 'react'

export default class Header extends Component {
  inputChange = (event) => {
    console.log(event)
  }
  render() {
    return (
      <>
        <header>
          <div className="logo" onClick={() => console.log('i was clicked')}>
            Logo
          </div>
          <input onChange={this.inputChange} />
        </header>
      </>
    )
  }
}
