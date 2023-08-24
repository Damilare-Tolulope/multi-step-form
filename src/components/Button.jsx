import React from 'react'

const Button = ({ children, className, type, isSecondary, isLinked, to, onClick }) => {
  return (
    <button
        onClick={onClick}
        className={` ${isSecondary ? "" : ""} ${className}`}
        type={type}
    > 
        {children} 
    </button>
  )
}

export default Button