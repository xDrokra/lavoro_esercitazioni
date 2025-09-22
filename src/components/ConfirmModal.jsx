import Modal from './Modal';
import Button from './Button';


/** 
 * Modale di conferma
 * 
 * @component 
 * 
 * @param {Object} props proprieta' del componente
 * @param {boolean} props.isOpen controlla la visibilità del modale. Se false, non viene visualizzato.
 * @param {function} props.onClose funzione eseguita al click sullo sfondo o su annulla (chiude il modale).
 * @param {function} props.onConfirm funzione eseguita al click su conferma (deve essere fornita).
 * @param {string} [props.title] titolo del modale
 * @param {string} props.message messaggio da visualizzare nel modale
 * @param {any} [props.props] props HTML del componente
 * 
 * 
 * **/

const ConfirmModal = ({ isOpen, onClose, onConfirm, title = 'Vuoi confermare?', message }) => {
    if (!isOpen) {
        return null;
    }

    const handleConfirm = async () => {
        await onConfirm(); // aspetta che la funzione onConfirm sia completata
        onClose(); // chiude il modale dopo la conferma
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} bottom={<>
            <Button onClick={onClose} variant='secondary'>Annulla</Button>
            <Button onClick={handleConfirm} variant='primary'>Conferma</Button>
        </>}>
            <p>{message}</p>
        </Modal >

    )
}

export default ConfirmModal