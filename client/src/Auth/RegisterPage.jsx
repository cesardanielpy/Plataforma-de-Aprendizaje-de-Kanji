import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const RegisterPage = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const { name, email, password, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const onRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/usuario', { name, email, password });
            const { usuario } = response.data;
            login(usuario.name);
            navigate('/', {
                replace: true,
            });
            onResetForm();
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className='wrapper'>
                <form onSubmit={onRegister}>
                    <h1>Registrarse</h1>
                    <div className="input-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" value={name} onChange={onInputChange} required autoComplete='on' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={email} onChange={onInputChange} required autoComplete='on' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name="password" id="password" value={password} onChange={onInputChange} required autoComplete='on' />

                    </div>
                    <button>Registrarse</button>
                </form>
            </div>
        </>
    )
}

export default RegisterPage