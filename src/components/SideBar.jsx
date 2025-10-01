import React from 'react'


/**
 * Componente per la Sidebar
 * 
 * @component
 * @param {ReactNode} props.children contenuto della sidebar
 * @param {Array<string>} [props.links=[]] array di link da visualizzare nella sidebar
 * @param {string} [props.className=''] classi CSS aggiuntive
 * @param {Object} props proprieta' del componente
 * 
 * 
 */
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