import React from 'react'
// import Card from './Component/Card/Card'

export default function HeadingComponent({title, children}) {
  return (
      <>
      <div>
      <h1>{title}</h1>
      <div>{children}</div>
      </div>
      </>
    )
}
