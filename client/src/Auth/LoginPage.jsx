import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import './style/RegisterPage.css';

export const AuthContext = createContext({});

const LoginPage = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const onLogin = e => {
        e.preventDefault();

        localStorage.setItem('token', 'placeholder-token');
        navigate('/', {
            replace: true,
            state: {
                logged: true,
                name
            }
        });

        onResetForm();
        setIsAuthenticated(true);
    };

    const { name, email, password, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: '',
    });

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            <div className='wrapper'>
                <form onSubmit={onLogin}>
                    <h1>Iniciar Sesion</h1>
                    <div className="input-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" value={name} onChange={onInputChange} required autoComplete='on' />
                    </div>
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
        </AuthContext.Provider>
    );
};

export default LoginPage; 