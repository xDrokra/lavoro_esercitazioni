
/**
 * 
 * Navbar adattiva
 * @component
 * 
 * @param {string} className Classi aggiuntive per la navbar
 * @param {string} logo URL del logo da visualizzare
 * @param {string} title Titolo della navbar
 * @param {Array} links Array di link da visualizzare nella navbar
 * @param {ReactNode} rightContent Contenuto da visualizzare a destra (es. input di ricerca, pulsanti, ecc.)
 * @param {object} props Altri props da passare al componente
 * 
 */

const Navbar = ({className = '', logo, title, links = [], rightContent,  ...props}) => {
  const baseStyle = 'w-full flex items-center justify-between p-4 shadow-md bg-white';
  
  return (
    <nav className={`${baseStyle} ${className}`} {...props}>


      <div className="flex items-center">
        {logo && <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>}
        {title && <h1 className="text-xl font-bold">{title}</h1>}
      </div>

      <ul className='hidden md:flex gap-6'>
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer hover:text-gray-500">
            <a href={link} className=''>{link}</a>
          </li>
        ))}

      </ul>
      
      <div className='hidden md:flex items-center'>
        {rightContent && <div>{rightContent}</div>}
      </div>

      {/* sezione mobile */}
      <div className='md:hidden'>
        <button className='p-2 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
