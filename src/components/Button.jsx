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
 * @param {'auto'|'full'} [props.size='auto'] dimensione del pulsante, auto o full width
 * @param {string} [props.className=''] classi aggiuntive per la personalizzazione
 * @param {'left'|'right'} [props.iconPosition='left'] posizione dell'icona in caso ci sia
 * @param {React.ReactNode} [props.icon] icona da mostrare nel pulsante
 * @param {any} [props.props] props HTML del button
 */

const Button = ({ children, onClick, type = 'submit', variant = 'primary', size = 'auto', className = '', iconPosition = 'left', icon, ...props }) => {
    // stile default
    const defaultStyle = 'inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-center';
    const variants = {
        primary: 'bg-custom-purple text-white hover:opacity-90 transition-opacity',
        secondary: 'bg-custom-gray text-black'
    }

    const sizes = {
        auto: 'w-fit',
        full: 'w-full'
    }

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${defaultStyle} ${variants[variant]} ${className} ${sizes[size]}`}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="flex-shrink-0 h-4 w-4 mr-1">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="w-4 ml-1">{icon}</span>}
        </button>
    )
}

export default Button;