/**
 * Contenitore riutilizzabile con stile predefinito
 * Utile come contenitore
 *
 * @component
 *
 * @param {Object} props proprieta' del componente
 * @param {React.ReactNode} props.children contenuto della card 
 * @param {string} [props.className=""] classi aggiuntive per la personalizzazione
 * @param {any} [props.props] props HTML per il componente div
 *
**/

const Card = ({ children, className = '', ...props }) => {
    // stile default
    const defaultStyle = "bg-white shadow-lg rounded-xl p-4"
    
    return (
        <div 
            className={`${defaultStyle} ${className}`}
            {...props}
        >
            {children}
        </div>
    )

}

export default Card;