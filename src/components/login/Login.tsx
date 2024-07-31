import React from "react"

const Login = () => {
  return (
    <div>
    <header className="header">
        <div className="logo">
            <img src="./assets/logo_con_borde.png" alt="Logo" className="logo"/>
            <h3 className="logo__titulo">MeContaron</h3>
        </div>
    </header>

    <div className="login">
        <h3 className="login__titulo">Ingresa con tu cuenta</h3>
        <div>
            <button className="login__boton-1"><span><i className="fa-brands fa-google"></i> Iniciar sesion con Google</span></button>
            <button className="login__boton-1"><span><i className="fa-brands fa-x-twitter"></i>Iniciar sesion con X</span></button>
        </div>
        <div className="login__o--wrapper">
            <div className="login__linea"></div>
            <p className="login__o">O</p>
            <div className="login__linea"></div>
        </div>
    </div>

    <button className="login__boton-2" id="boton"><span>Iniciar sesion con tu usuario</span></button>

    <div className="login__terminos">
        <p className="login__parrafo">Al registrarte, aceptas los <a className="terminos__link">Términos de servicio</a> y la <a className="terminos__link">Política de privacidad</a>, incluida la política de <a className="terminos__link">Uso de Cookies.</a></p>
    </div>

    <button className="login__boton-3"><span><i className="fa-solid fa-user-secret"></i>Iniciar sesion con tu usuario</span></button>
    </div>
  )
}

export default Login