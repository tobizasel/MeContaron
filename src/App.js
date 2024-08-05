import Login from "./components/login/Login";
import React, {useState} from "react";
import Prueba from "./components/Prueba";
import Seguidos from "./components/paginas/Seguidos";
import KeywordExtractor from "./claude/KeywordExtractor";

const App = () => {

  //   const { userLoggedIn } = useAuth();
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  

  return (
    <>
      {
        !userLoggedIn ? 
        <header className="header">
        <div className="logo">
          <img src="./assets/logo_con_borde.png" alt="Logo" className="logo" />
          <h3 className="logo__titulo">MeContaron</h3>
        </div>
      </header> 
      :
      <header className="header-2">
          <div className="header__izquierda">
          <img src={"fotodeusuario"} className="header__usuario--img"/>
          <div className="header__usuario--info">
            <h4 className="header__nombre">Nombre</h4>
            <h5 className="header__usuario">@Usuario</h5>
          </div>
        </div>
          <button className="boton__cerrar">Cerrar sesion</button>
      </header>
      }
    <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
    <KeywordExtractor/>
    </>
  );
};

export default App;
