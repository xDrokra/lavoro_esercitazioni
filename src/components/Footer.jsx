import React from 'react'


/**
 * 
 * Componente Footer
 * 
 * @component
 * 
 * @param {string} logo URL del logo da visualizzare
 * @param {string} title Titolo del footer
 * @param {string} copyRight Testo di copyright personalizzato
 * @param {Array} links Array di oggetti con {label, href} per i link centrali
 * @param {ReactNode} rightContent Contenuto opzionale da visualizzare a destra
 * @param {string} className Classi CSS aggiuntive
 * @param {object} props Altri props HTML validi per il tag footer
 * @returns 
 */

const Footer = ({logo, title, copyRight, links=[], rightContent, className='', ...props }) => {
  
  const baseStyle = 'w-full flex items-center justify-between p-4 bg-gray-50 text-black';  
  return (
    <footer className={`${baseStyle} ${className}`} {...props}>
      <div className='flex items-center'>
        {logo && <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>}
        {title && <h1 className="md:text-xl text-sm font-bold">{title}</h1>}  
      </div>      

      {/* Link centrali */}
      {links.length > 0 && (
        <ul className="flex gap-4 text-sm mb-2 md:mb-0">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div>
        {copyRight ? copyRight : 
        <div className='text-sm'>
          Copyright {title} &copy; {new Date().getFullYear()}
        </div>}

      </div>

      <div className='hidden md:flex items-center'>
        {rightContent && <div>{copyRight}</div>}
      </div>
      
    </footer>
  )
}

export default Footer
