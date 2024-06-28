import React from 'react'
import Button from './Button'
import Heading from './HeadingComponent'
import Card from './Component/Card/Card'
import './Learn.css'

export const LearningComponent = () => {
  return (
    <>
    <Heading title= ''>
    <Button text='Register'/>
    <Button text='Login'/>
    <Button text='Logout'/>
    </Heading>
    <div className='container'>

    <Card/> <Card/>
    </div>
    

    </>
  )
}
