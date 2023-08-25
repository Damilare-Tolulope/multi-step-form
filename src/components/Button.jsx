import React from 'react'

const Button = ({ children, className, type, isSecondary, isLinked, to, onClick }) => {
  return (
    <button
        onClick={onClick}
        className={`text-white bg-marineblue rounded-md px-6 py-3 md:px-8 md:py-4 text-sm md:text-base transition linear duration-300 hover:bg-purplishblue cursor-pointer ${isSecondary ? "!bg-transparent text-coolgray border border-transparent hover:border-marineblue hover:text-marineblue" : ""} ${className}`}
        type={type}
    > 
        {children} 
    </button>
  )
}

export default Button