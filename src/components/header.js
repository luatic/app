import React from 'react'

const getDate = () => {
  const newDate = new Date()
  return newDate.getFullYear()
}

const Header = () => (
  <>
    <div>the date is : {getDate()}</div>
  </>
)

export default Header
