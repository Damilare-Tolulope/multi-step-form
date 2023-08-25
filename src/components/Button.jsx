import React from 'react'

const Button = ({ children, className, type, isSecondary, isLinked, to, onClick }) => {
  return (
    <button
        onClick={onClick}
        className={`text-white bg-marineblue rounded-md px-8 py-4 transition linear duration-300 hover:bg-purplishblue cursor-pointer ${isSecondary ? "!bg-transparent text-coolgray border border-transparent hover:border-marineblue hover:text-marineblue" : ""} ${className}`}
        type={type}
    > 
        {children} 
    </button>
  )
}

export default Button