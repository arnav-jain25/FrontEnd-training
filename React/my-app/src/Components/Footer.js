import React from 'react'

export default function Footer() {

  let footerStyle={
    color: 'bisque',
    textAlign: 'center',
    backgroundColor: 'brown',
    padding: 10,
    position: 'relative',
    width: '100%',
    marginTop: '65vh'

  }

  return (
    <footer style={footerStyle}>
      <p>Rights are reserved 2022 - Test App</p>
    </footer>
  )
}
