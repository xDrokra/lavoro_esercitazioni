import React from 'react'

const SideBar = ({children, links = [], className = '', ...props}) => {
  const baseStyle = "w-64 h-full bg-gray-50 p-4 flex flex-col"

  return (
    <aside className={`sidebar ${baseStyle} ${className}`} {...props}>
      {children}
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar