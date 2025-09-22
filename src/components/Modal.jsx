import Card from "./Card";

/**
 * Una finestra modale generica, che utilizza il componente Card come contenitore
 * Si apre sopra il contenuto principale della pagina e può essere chiusa cliccando
 * all'esterno o tramite il pulsante
 *
 * @component
 *
 * @param {Object} props proprieta' del componente
 * @param {React.ReactNode} props.children contenuto del modale 
 * @param {boolean} props.isOpen controlla la visibilità del modale. Se false, non viene visualizzato.
 * @param {function} props.onClose funzione eseguita al click sullo sfondo (chiude il modale).
 * @param {string} [props.className=""] classi aggiuntive per la personalizzazione
 * @param {string} [props.title] titolo del modale
 * @param {React.ReactNode} [props.bottom] contenuto opzionale da visualizzare in fondo al modale (es. bottoni)
 * @param {any} [props.props] props HTML del componente
 *
**/

const Modal = ({ children, isOpen, onClose, title, bottom, className = '', ...props }) => {
    // verifica visiblita'
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-80 flex items-center justify-center"
            onClick={onClose} // chiusura modale
        >
            <Card
                className={`bg-white rounded-lg p-6 flex flex-col gap-8 ${className}`}
                onClick={e => e.stopPropagation()} // impedisce la chiusura se il modale viene cliccato
                {...props}
            >
                {title &&
                    <h2 className="text-2xl font-semibold">{title}</h2>
                }

                {/* Body */}
                <div className="">{children}</div>

                {/* Bottom */}
                {bottom && <div className="flex gap-2">{bottom}</div>}
            </Card>
        </div>

    )

}

export default Modal;