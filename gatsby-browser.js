import React from 'react'
import GlobalStyle from './src/styles/globalStyles'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
