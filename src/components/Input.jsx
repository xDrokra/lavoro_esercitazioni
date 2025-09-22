/**
 * Campo di input generico
 * Supporta varianti di stile predefinite e accetta tutte le props standard di input
 *
 * @component
 *
 * @param {Object} props proprieta' del componente
 * @param {"text" | "password" | "email" | "number" | string} [props.type="text"] tipo di input
 * @param {"primary" | "error" | "success" | string} [props.variant="primary"] lo stile variante dell'input
 * @param {string} [props.label] etichetta opzionale per l'input
 * @param {string} [props.errorMessage] messaggio di errore opzionale da visualizzare sotto l'input
 * @param {React.ReactNode} [props.icon] icona opzionale da visualizzare all'interno dell'input
 * @param {string} [props.className=""] classi aggiuntive per la personalizzazione
 * @param {any} [props.props] props HTML dell'input
 *
 */

const Input = ({ type = 'text', label, variant = 'primary', errorMessage, className = '', icon, ...props }) => {
    const defaultStyle = 'px-3 py-2 border-2 rounded-lg'
    const variants = {
        primary: '',
        error: "border-red-500 focus:border-red-600",
        success: "border-green-500 focus:border-green-600",
    }

    return (

        <div>

            {label && <label className="block mb-1 font-medium">{label}</label>}

            {icon ? (
                <div className={`flex items-center ${defaultStyle} ${className} ${variants[variant]} max-w-sm focus-within:border-black`}>
                    {icon && <span>{icon}</span>}
                    <input
                        type={type}
                        className={`pl-3 bg-transparent border-none focus:outline-none`}
                        {...props}
                    />
                </div>
            ) : (

                <input
                    type={type}
                    className={`${defaultStyle} ${variants[variant]} ${className}`}
                    {...props}
                />
            )}




            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    )
}

export default Input;