import React, { useState } from "react";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState();
  const [senhaL, setSenha] = useState();
  const { setPages, setUsuario } = useContext(PagesContext);
  
  const [erroLogin, setErroLogin] = useState("")

  const loogin = async (e) => {
    const user = username;
    const senha = senhaL;

    const result = await fetch("http://localhost:1221/api/coord/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user,
        senha,
      }),
    });
    let log = await result.json();
    if (log.status || log.message) {
      setErroLogin("Usuario ou senha invalidos !")
    }
    else{
      setPages("home");
      setUsuario(log)
    }
    // console.log(log)
  };
  
  return (
    <div className="tela">
      <div className="all">
        <div className="titulo">
          <div style={{ width:200}}>
          <br />
          <h2>SysEnade</h2> 
          <p>Olá vamos começar!</p>

          </div>
          <div className='fotoo'>

          </div>
        </div>
        <form className="formLogin">
          <div>
            <input
              type="text"
              id="exampleInputEmail1"
              placeholder="E-mail ou username.."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <br />
            <p className="errologin"> {erroLogin}</p>
          <div className="">
            <button
              className="btnLogin"
              onClick={(e) => {
                e.preventDefault()
                loogin();
                // setPages("home");
              }}
            >
              Entrar
            </button>
            <button
              className="btnLogin"
              onClick={() => setPages("cadastrarUser")}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
