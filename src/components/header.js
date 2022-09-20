import React, {Component} from 'react'

let styles = {
  header: {
    background: '#03a9fa',
  },
  logo: {
    color: '#fff',
    fontFamily: 'Anton',
    textAlign: 'center',
  },
}

export default class Header extends Component {
  render() {
    return (
      <>
        <div style={styles.header}>
          <div style={styles.logo}>Logo</div>
          <input />
        </div>
      </>
    )
  }
}
