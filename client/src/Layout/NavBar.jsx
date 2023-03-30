import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const {state} = useLocation();
    const navigate = useNavigate();


    console.log(state);

    const onLogout = () => {
        navigate('/kanji/login',{
            replace: true,
        })
    }





    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src='https://cdn-icons-png.flaticon.com/512/410/410207.png' alt="Logo" width="30" height="30"/> Kanji Para Todos - 日本
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                                {
                                    state?.logged ? (
                                        <li className="nav-item">
                                <span className='badge badge-primary mt-1'><h6>{state?.name}</h6></span>
                            <button className="btn btn-primary" onClick={onLogout} aria-current="page"><i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesion</button>
                            </li>
                                    ) : (
                                        <>
                                        <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/kanji/login"><i className="fa-solid fa-user-ninja"></i> Iniciar Sesion</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/kanji/register"><i className="fa-solid fa-id-card"></i> Registrarse</Link>
                                        </li>
                                        </>
                                    )}
                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Guia Principal
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/kanji/intro">Introduccion</Link></li>
                                    <li><Link className="dropdown-item" to="/kanji/intro/1">Razones Para Estudiar Japones</Link></li>
                                    <li><Link className="dropdown-item" to="/kanji/contact">Contacto</Link></li>
                                    <li><Link className="dropdown-item" to="/kanji/list">Lista de Kanji</Link></li>
                                    <li><Link className="dropdown-item" to="/kanji/add">Formulario de Kanji</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar