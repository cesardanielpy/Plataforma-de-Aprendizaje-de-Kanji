import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import './style/RegisterPage.css';

const LoginPage = () => {
    
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const onLogin = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/usuario/login', {
                email,
                password
            });
            const { data } = response;
            localStorage.setItem('token', data.token);
            login(data.usuario.name);
            navigate('/', {
                replace: true
            });
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const {  email, password, onInputChange, onResetForm } = useForm({
        email: '',
        password: '',
    });

    return (
        <div className='wrapper'>
            <form onSubmit={onLogin}>
                <h1>Iniciar Sesion</h1>
                {error && <p>{error}</p>}
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={onInputChange} required autoComplete='on' />
                </div>
                <div className="input-group">
                    <label htmlFor="password\">Contraseña:</label>
                    <input type="password" name="password" id="password" value={password} onChange={onInputChange} required autoComplete='on' />
                </div>
                <button>Iniciar Sesion</button>
            </form>
        </div>
    );
};

export default LoginPage;
