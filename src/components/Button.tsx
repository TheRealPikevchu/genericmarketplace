import React from 'react'
import Form from 'react-bootstrap/Form'
import BS_Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

interface ButtonProperties {
  content?: string
  isIcon?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProperties> = ({ content, isIcon, onClick }) => {
  return <></>
}

export default Button
