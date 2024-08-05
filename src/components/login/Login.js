import React, { useState } from "react";
import { signInGoogle } from "../../firebase/auth";
import Main from "../paginas/Main";

const Login = ({userLoggedIn, setUserLoggedIn}) => {

const [isSigningIn, setIsSigningIn] = useState(false);

  

  const onGoogleSignIn = async () => {
      if (!isSigningIn) {
        setUserLoggedIn(true);
      setIsSigningIn(true);
      try {
        // await signInGoogle();
      } catch (err) {
        console.error("Google sign-in error:", err);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      {userLoggedIn ? (
        <>
            <Main/>
        </>
      ) : (
        <div className="login">
          <h3 className="login__titulo">Ingresa con tu cuenta</h3>
          <div>
            <button className="login__boton-1" onClick={onGoogleSignIn} disabled={isSigningIn}>
              <span><i className="fa-brands fa-google"></i> Iniciar sesión con Google</span>
            </button>
            <button className="login__boton-1">
              <span><i className="fa-brands fa-x-twitter"></i> Iniciar sesión con X</span>
            </button>
          </div>
          <div className="login__o--wrapper">
            <div className="login__linea"></div>
            <p className="login__o">O</p>
            <div className="login__linea"></div>
          </div>
          <button className="login__boton-2" id="boton">
            <span>Iniciar sesión con tu usuario</span>
          </button>
          <div className="login__terminos">
            <p className="login__parrafo">
              Al registrarte, aceptas los <a className="terminos__link">Términos de servicio</a> y la <a className="terminos__link">Política de privacidad</a>, incluida la política de <a className="terminos__link">Uso de Cookies</a>.
            </p>
          </div>
          <button className="login__boton-3">
            <span><i className="fa-solid fa-user-secret"></i> Iniciar sesión con tu usuario</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
