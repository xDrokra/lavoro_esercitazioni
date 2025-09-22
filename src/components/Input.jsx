/**
 * Campo di input generico
 * Supporta varianti di stile predefinite e accetta tutte le props standard di input
 *
 * @component
 *
 * @param {Object} props proprieta' del componente
 * @param {"text" | "password" | "email" | "number" | string} [props.type="text"] tipo di input
 * @param {"primary" | string} [props.variant="primary"] lo stile variante dell'input
 * @param {string} [props.className=""] classi aggiuntive per la personalizzazione
 * @param {any} [props.props] props HTML dell'input
 *
 */

const Input = ({ type = 'text', variant = 'primary', className = '', ...props }) => {
    const defaultStyle = 'px-3 py-2'
    const variants = {
        primary: 'border-2 rounded-lg focus:outline-none'
    }

    return (
        <input
            type={type}
            className={`${defaultStyle} ${variants[variant]} ${className}`}
            {...props}
        />
    )
}

export default Input;