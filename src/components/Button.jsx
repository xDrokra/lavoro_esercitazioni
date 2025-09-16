/**
 * Un componente Button generico e riutilizzabile.
 * 
 * @component 
 * 
 * @param {object} props proprieta' componente
 * @param {React.ReactNode} props.children contenuto del pulsante
 * @param {function} [props.onClick] funzione di chiamata al click
 * @param {'submit'|'button'|'reset'} [props.type='submit'] tipo del pulsante
 * @param {string} [props.variant='primary'] lo stile variante del pulsante
 * @param {string} [props.className=''] classi aggiuntive per la personalizzazione
 * @param {any} [props.props] props HTML del button
 */

const Button = ({ children, onClick, type = 'submit', variant = 'primary', className = '', ...props }) => {
    // stile default
    const defaultStyle = 'px-3 py-4 rounded-lg font-semibold text-center';
    const variants = {
        primary: 'bg-custom-purple text-white'
        // altre varianti
    }

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${defaultStyle} ${variants[variant]} ${className}`} 
            {...props}    
        >
            {children}
        </button>
    )
}

export default Button;