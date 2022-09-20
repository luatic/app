import React from 'react'

const Header = () => {
  const getDate = () => {
    const newDate = new Date()
    return newDate.getFullYear()
  }
  return (
    <>
      <div>the date is : {getDate()}</div>
    </>
  )
}

export default Header
