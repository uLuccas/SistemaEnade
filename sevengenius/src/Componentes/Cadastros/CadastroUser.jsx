import React, { useState } from "react";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import "./Cadastro.css";

const CadastroUser = () => {
  const [senhaC, setSenhaCad] = useState();
  const [usuarioCad, setUsuario] = useState();
  const [emailCad, setEmail] = useState();
  const [nomeCad, setNomeCad] = useState();
  const { setPages } = useContext(PagesContext);

  const cadUser = async () => {
    const nome = nomeCad;
    const usuario = usuarioCad;
    const email = emailCad;
    const senha = senhaC;

    const result = await fetch("http://localhost:1221/api/coord/cadastrar", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        usuario,
        email,
        senha,
      }),
    });

    return result.json();
  };

  return (
    <div className="tela">
      <div className="area">
        <h4 class="card-title">Cadastro de Usuario</h4>
        <p class="card-description">Todos os dados são obrigatorios.</p>
        <div className="engloba">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            Nome:
            <div>
              <input
                type="text"
                placeholder="insira seu nome"
                onChange={(e) => {
                  setNomeCad(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            Username:
            <div>
              <input
                type="text"
                placeholder="insira o Username "
                name="login"
                onChange={(e) => {
                  setUsuario(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            Senha:
            <div>
              <input
                type="password"
                placeholder="insira a senha"
                name="senha"
                onChange={(e) => {
                  setSenhaCad(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            E-mail:
            <div>
              <input
                type="email  "
                placeholder="insira o email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="btn btn-primary me-2"
            onClick={() => {
              cadUser();
              setPages("login");
            }}
          >
            Cadastrar
          </button>
          <button style={{margin: 10}} class="btn btn-light">Limpar</button> <br />
          <button class="btn btn-light" onClick={() => setPages('login')}>Voltar</button>
          
        </div>
      </div>
    </div>
  );
};

export default CadastroUser;
