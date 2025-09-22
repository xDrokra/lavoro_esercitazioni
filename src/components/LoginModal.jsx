import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import Input from './Input';


/**
 * 
 * Modal di login 
 * 
 * @component
 * 
 * @param {Object} props proprieta' del componente
 * @param {boolean} props.isOpen controlla la visibilità del modale. Se false, non viene visualizzato.
 * @param {function} props.onClose funzione eseguita al click sullo sfondo (chiude il modale).
 * @param {function} props.onLogin funzione eseguita al click sul pulsante di login, riceve email e password come argomenti
 * 
 * */

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: null, password: null });

    if (!isOpen) {
        return null;
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError({
                email: !email ? "Email è obbligatoria" : null,
                password: !password ? "Password è obbligatoria" : null,
                credentials: null
            });
            return;
        }

        try {
            setError({ email: null, password: null, credentials: null });
            await onLogin(email, password);
            onClose(); // chiude il modale dopo il login
        } catch (error) {
            setError(prev => ({
                ...prev,
                credentials: "Email o password errati"
            }));
        }

    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} className='w-full max-w-sm' title="Login" bottom={
            <Button onClick={handleLogin} size='full' >
                Accedi
            </Button>
        }>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <Input value={email} className='w-full' label='Email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" errorMessage={error.email} variant={error.email ? "error" : "primary"} />
                <Input type="password" className='w-full' value={password} label='Password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" errorMessage={error.password} variant={error.password ? "error" : "primary"} />
            {error.credentials && <p className="text-red-500 text-sm mt-2">{error.credentials}</p>}
            </form>
        </Modal>
    )
}

export default LoginModal